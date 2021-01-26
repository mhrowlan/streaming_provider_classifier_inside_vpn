import pandas as pd
import numpy as np
import re

def split(filename, chunk_size):
    """
    Splits each dataset into chunk_size chunks
    """

    # On uncleaned filenames:
    streaming_providers = {
        'youtube' : 0,
        'amazonprime': 1,
        'netflix': 2,
    }
    if 'mhrowlan' in filename:
        provider = streaming_providers[filename.split('-')[1]]
    else:
        provider = streaming_providers[filename.split('_')[1]]
    
    if provider not in streaming_providers.keys():
        provider = 3

    df = pd.read_csv(filename)
    start = df['time'].values[0]-1
    end = df['time'].values[-1]+chunk_size
    bins = np.arange(start, end, chunk_size)
    df['binned'] = pd.cut(df['time'], bins)
    all_dfs = []
    for key, split_df in df.groupby('binned'):
        all_dfs.append((provider, split_df))
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
