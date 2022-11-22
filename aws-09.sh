#To check file system utilization
df -h

#To list all block storage attached
lsblk

#To check if any file is there in the block storage or not. /dev/xvdf:data means no data in the block storage.
sudo file -s /dev/xvdf

#To make a new directory
sudo mkdir /newdir

#To make a file system from the block storage
sudo mkfs -t ext4 /dev/xvdf

#To mount the file system to newdir directory
sudo mount /dev/xvdf /newdir/

#To unmount the filesystem
sudo umount /dev/xvdf
