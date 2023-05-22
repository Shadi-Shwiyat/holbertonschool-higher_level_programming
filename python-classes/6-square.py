#!/usr/bin/python3
"""Task 6 adds coordinates of a square"""


class Square:
    """Define the square class"""
    def __init__(self, size=0, position=(0,0)):
        """Initialize the square"""
        if type(size) != int:
            raise TypeError("size must be an integer")
        if size < 0:
            raise ValueError("size must be >= 0")
        if self.__check_tuple(position) is False \
           or self.__check_indexes(position) is False \
           or self.__check_integers(position) is False \
           or self.__check_values(position) is False:
            raise TypeError('position must be a tuple of 2 positive integers')

        self.__size = size
        self.__position = position

    @property
    def size(self):
        return self.__size

    @size.setter
    def size(self, size):
        if type(size) is not int:
            raise TypeError('size must be an integer')

        if size < 0:
            raise ValueError('size must be >= 0')

        self.__size = size

    @property
    def position(self):
        return self.__position

    @position.setter
    def position(self, position):
        if self.__check_tuple(position) is False \
           or self.__check_indexes(position) is False \
           or self.__check_integers(position) is False \
           or self.__check_values(position) is False:
            raise TypeError('position must be a tuple of 2 positive integers')

        self.__position = position

    def __check_tuple(self, position):
        if type(position) is tuple:
            return True

        return False

    def __check_indexes(self, position):
        if len(position) == 2:
            return True

        return False

    def __check_integers(self, position):
        if type(position[0]) is int and type(position[1]) is int:
            return True

        return False

    def __check_values(self, position):
        if position[0] >= 0 and position[1] >= 0:
            return True

        return False

    def area(self):
        """Prints the area of the square"""
        return self.__size ** 2

    def my_print(self):
        if self.__size == 0:
            print()
            return None

        for i in range(1, self.area() + 1):
            print('#', end='')

            if i % self.__size == 0 and i > 0:
                print()
