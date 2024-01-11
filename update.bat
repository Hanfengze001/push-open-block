@echo off
title 融科编程更新助手QDProbot Update
echo 当前目录：%~dp0
echo 编程正在更新中，请等待... 

:: 结束RKYQtop.exe进程
taskkill /f /im RKYQtop.exe

:: 切换到Git目录
cd /d "%~dp0\Git\cmd\"

:: 重置本地仓库到远程master分支的状态
git reset --hard origin/master

:: 拉取最新的远程仓库内容
git pull origin master

:: 删除.git/logs文件夹
rd /s /q "%~dp0\.git\logs\"

:: 清理并优化本地仓库
git gc --auto

:: 删除不再需要的对象
git prune

:: 清理任何可能存在的index.lock文件
git clean -f .git/index.lock

:: 清除RKYQtop缓存
del /f /s /q "%SystemDrive%\Users\%username%\AppData\Roaming\RKYQtop\*.*"

echo RKYQtop更新完成并自动"清除缓存"。按任意键重启软件。
echo 融科编程更新完成！（注：如果是首次执行更新指令请再次运行）
echo 并自动“清除缓存”按任意键重启软件！

:: 等待用户按键
pause
echo  off
cd "%~dp0"
cd..
start RKYQtop.exe
exit
@echo off

