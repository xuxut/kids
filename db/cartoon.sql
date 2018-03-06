set names utf8;

drop database if exists cartoon;
create database cartoon charset=utf8;

use cartoon;

--�ֲ�
create table slider(
	aid int,
	img varchar(255),
	title varchar(128),
	des varchar(255)
)
insert into slider values(
	null,"img","title","des",
)

--�������
create table person(
	pid int,
	pname varchar(128),
	img varchar(255),
	des varchar(255)
)

--��Ӱ
create table movie(
	mid int,
	fid int,  				#��Ӱ����
	mname varchar(128), 	#��Ӱ��
	des varchar(255),   	#��Ӱ����
	shelf_time DATETIME,	#��ӳʱ��
	src varchar(255)        #��Ӱ���ŵ�ַ
)

