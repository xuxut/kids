set names utf8;

drop database if exists cartoon;
create database cartoon charset=utf8;

use cartoon;

--轮播
create table slider(
	aid int,
	img varchar(255),
	title varchar(128),
	des varchar(255)
)
insert into slider values(
	null,"img","title","des",
)

--人物介绍
create table person(
	pid int,
	pname varchar(128),
	img varchar(255),
	des varchar(255)
)

--电影
create table movie(
	mid int,
	fid int,  				#电影分类
	mname varchar(128), 	#电影名
	des varchar(255),   	#电影描述
	shelf_time DATETIME,	#上映时间
	src varchar(255)        #电影播放地址
)

