
echo "start scp files from vuepress_workspace/other-blog/public/* to root@heyan.site:/home/nginx_otherblog/html"
sshpass -p "Heyan0616" scp -r /Users/heyan/self/workspace/vuepress_workspace/other-blog/public/* root@heyan.site:/home/nginx_otherblog/html
echo "scp files to server complete"