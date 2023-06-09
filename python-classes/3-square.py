#!/usr/bin/python3
"""Task 3 calculates the area of a square"""


class Square:
    """Define the square class"""
    def __init__(self, size=0):
        """Initialize the square"""
        if type(size) != int:
            raise TypeError("size must be an integer")
        if size < 0:
            raise ValueError("size must be >= 0")
        self.__size = size

    def area(self):
        """Prints the area of the square"""
        return self.__size ** 2
