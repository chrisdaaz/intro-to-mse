#!/usr/bin/python3

import os

output_filename = '201-301'
output_directory = 'public'

def chapter_files():
    '''Returns a list of chapters'''
    table_of_contents = 'source/table-of-contents.txt'
    with open(table_of_contents, 'r') as toc:
        titles = toc.readlines()
        paths = ['source/chapters/' + i for i in titles]
        return(paths)

image_path = 'source/images/'
images = []

def find_images(image_path):
    '''untested'''
    for file in os.listdir(path):
        if file.endswith(".jpg"):
            images.append(os.path.join(path, file))
        elif file.endswith(".png"):
            images.append(os.path.join(path, file))
        elif file.endswith(".svg"):
            images.append(os.path.join(path, file))