#!/bin/bash

#rm tmp.txt
var=`xsel -b > tmp.txt`

sed -i 's/h1./#/g' tmp.txt
sed -i 's/h2./##/g' tmp.txt
sed -i 's/h3./###/g' tmp.txt
sed -i 's/h4./####/g' tmp.txt
sed -i 's/@/`/g' tmp.txt
sed -i 's/\*\{4\}/        */g' tmp.txt
sed -i 's/\*\{3\}/      */g' tmp.txt
sed -i 's/\*\{2\}/    */g' tmp.txt
xclip -sel c < tmp.txt
rm tmp.txt

