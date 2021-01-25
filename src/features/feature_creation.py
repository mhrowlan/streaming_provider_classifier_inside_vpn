import pandas as pd
import numpy as np
import re

def split(filename, chunk_size):
    """
    Splits each dataset into chunk_size chunks
    """

    # On uncleaned filenames:
    streaming_providers = [
        "youtube", "hbomax", "disneyplus", "canvas", "amazonprime", "hulu",
        "vimeo", "netflix", "espnplus", "streaming"
    ]
    browsing_words = [
        "novideo", "nostream", "general", "browsing", 
    ]
    is_streaming = bool(re.search('|'.join(streaming_providers), filename.lower()))
    is_browsing = bool(re.search('|'.join(browsing_words), filename.lower()))

    # A file can't be both streaming and browsing, and it can't be neither!
    if (is_streaming and is_browsing) or not (is_streaming or is_browsing):
        raise Exception(f'Filename {filename} unclear.')


    df = pd.read_csv(filename)
    start = df['time'].values[0]-1
    end = df['time'].values[-1]+chunk_size
    bins = np.arange(start, end, chunk_size)
    df['binned'] = pd.cut(df['time'], bins)
    all_dfs = []
    for key, split_df in df.groupby('binned'):
        all_dfs.append((int(is_streaming), split_df))
    return all_dfs

#Streaming longest streak of direction 1 and 2 packets
def longest_dir_streak(vals, dir):
    """
    Finds the longest streak of direction 1 or 2 packets.
    """
    longest = 0
    current = 0
    for num in vals:
        if num == dir:
            current += 1
        else:
            longest = max(longest, current)
            current = 0

    return max(longest, current)


def roll(df, column, seconds, stats=['mean']):
    """
    Rolling window aggregates calculated over a specified column, time range, and aggregating stat.
    """
    window_width = pd.offsets.Second(seconds)

    return (
        df
        [column]
        .rolling(seconds)
        .agg(stats)
    )
