#!/bin/sh
echo "hello" > fileio.txt
echo "world" >> fileio.txt
LINE=`sed -ne2p fileio.txt`
echo $LINE