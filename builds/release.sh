
# echo "start cp files from /vuepress_workspace/other-blog/docs/.vuepress/dist/* to /docker_workspace/nginx_blog/html"
# cp -rf /Users/heyan/self/workspace/vuepress_workspace/other-blog/docs/.vuepress/dist/* /Users/heyan/self/workspace/docker_workspace/nginx_otherblog/html
# echo "cp complete"

echo "start scp files from v/uepress_workspace/other-blog/docs/.vuepress/dist/* to root@heyan.site:/home/nginx_otherblog/html"
sshpass -p "Heyan0616" scp -r /Users/heyan/self/workspace/vuepress_workspace/other-blog/docs/.vuepress/dist/* root@heyan.site:/home/nginx_otherblog/html
echo "scp files to server complete"