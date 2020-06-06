
echo "start cp files from /vuepress_workspace/other-blog/docs/.vuepress/dist/* to /docker_workspace/nginx_otherblog/html"
rm -rf /Users/heyan/self/workspace/docker_workspace/nginx_otherblog/html/*
echo "clean docker html folder complete"
cp -rf /Users/heyan/self/workspace/vuepress_workspace/other-blog/public/* /Users/heyan/self/workspace/docker_workspace/nginx_otherblog/html
echo "cp file to docker folder complete"

echo "start scp files from /docker_workspace/nginx_otherblog/html/* to root@heyan.site:/home/nginx_otherblog/html"
sshpass -p "Heyan0616" ssh root@heyan.site "rm -rf /home/nginx_otherblog/html/*"
echo "clean the remote server html folder complete"
sshpass -p "Heyan0616" scp -r /Users/heyan/self/workspace/docker_workspace/nginx_otherblog/html/* root@heyan.site:/home/nginx_otherblog/html
echo "scp files to server complete"