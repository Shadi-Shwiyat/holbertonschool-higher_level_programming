#!/usr/bin/python3


def print_sorted_dictionary(a_dictionary):
    for key, val in sorted(a_dictionary.items()):
        print(key, ': ', val, sep='')
    return sorted(a_dictionary.items())
