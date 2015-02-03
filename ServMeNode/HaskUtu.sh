Using username "root".
root@162.243.13.12s password:
Welcome to Ubuntu 12.04.3 LTS (GNU/Linux 3.8.0-29-generic x86_64)

 * Documentation:  https://help.ubuntu.com/

  System information as of Sun Feb 16 01:26:21 EST 2014

  System load:  0.0               Processes:           65
  Usage of /:   5.9% of 19.56GB   Users logged in:     0
  Memory usage: 7%                IP address for eth0: 162.243.13.12
  Swap usage:   0%

  Graph this data and manage this system at https://landscape.canonical.com/

Last login: Wed Dec 11 11:20:39 2013 from 162.243.14.86
root@HaskUntu:~# useradd -d -p /home/evxyz -m evxyz
useradd: invalid home directory '-p'
root@HaskUntu:~# useradd -d  /home/evxyz -m evxyz
root@HaskUntu:~# passwd evxyz
# shift + 16 keys
Enter new UNIX password:
# shift + 16 keys
Retype new UNIX password:
passwd: password updated successfully
root@HaskUntu:~# passwd evxyz
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
root@HaskUntu:~#

