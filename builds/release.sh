

echo "start cp files from /vuepress_workspace/other-blog/docs/.vuepress/dist/* to /docker_workspace/nginx_otherblog/html"

# 清空 docker_workspace/nginx_otherblog/html 下所有文件
rm -rf /Users/heyan/self/workspace/docker_workspace/nginx_otherblog/html/*

echo "clean docker html folder complete"

# 复制build文件到dockler_workspace
cp -rf /Users/heyan/self/workspace/vuepress_workspace/other-blog/public/* /Users/heyan/self/workspace/docker_workspace/nginx_otherblog/html

echo "cp file to docker folder complete"

echo "start scp files from /docker_workspace/nginx_otherblog/html/* to root@heyan.site:/home/nginx_otherblog/html"

# 清空服务器上 /nginx_otherblog/html 下所有文件
sshpass -p "Heyan0616" ssh root@heyan.site "rm -rf /home/nginx_otherblog/html/*"

echo "clean the remote server html folder complete"

# 复制 /docker_workspace/nginx_otherblog/html 文件到服务器相应目录 /nginx_otherblog/html
sshpass -p "Heyan0616" scp -r /Users/heyan/self/workspace/docker_workspace/nginx_otherblog/html/* root@heyan.site:/home/nginx_otherblog/html

echo "start copy downloads folder in remote server"

# 在服务器上 复制download文件夹 到html下 （download的内容很少改变，这样可以减少传输的大小）
sshpass -p "Heyan0616" ssh root@heyan.site "cp -r /home/nginx_otherblog/download/ /home/nginx_otherblog/html/"

echo "scp files to server complete"

echo "backup project to NAS server - start"
/Users/heyan/self/workspace/backup.sh
echo "backup project to NAS server - complete"