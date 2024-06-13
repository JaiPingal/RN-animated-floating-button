cmake_minimum_required(VERSION 3.4.1)
project(RnAnimatedFloatingButton)

set (CMAKE_VERBOSE_MAKEFILE ON)
set (CMAKE_CXX_STANDARD 14)

add_library(rn-animated-floating-button            SHARED
            ../cpp/rn-animated-floating-button.cpp
            cpp-adapter.cpp
)

# Specifies a path to native header files.
include_directories(
            ../cpp
)
