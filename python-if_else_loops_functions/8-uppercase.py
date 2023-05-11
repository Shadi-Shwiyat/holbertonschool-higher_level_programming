#!/usr/bin/python3
def uppercase(str):
    for i in str:
        if ord(i) >= ord('97') and ord(i) <= ord('122'):
            i = chr(ord(i) - 32)
            print("{}".format(i), end="")
        print("")
