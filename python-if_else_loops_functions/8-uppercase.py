#!/usr/bin/python3
def uppercase(s):
    uppercase_str = ""
    for c in s:
        if ord('a') <= ord(c) <= ord('z'):
            uppercase_str += chr(ord(c) - 32)
        else:
            uppercase_str += c
    print("{}".format(uppercase_str))
    