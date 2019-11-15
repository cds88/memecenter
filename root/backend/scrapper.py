from bs4 import BeautifulSoup
from urllib.request import urlopen as uReq
import requests
from lxml import etree
from .models import Meme

def Faktopedia():

    url = 'https://faktopedia.pl/'

    page_html = requests.get(url)

    page_soup = BeautifulSoup(page_html.text, "html.parser")

    containers = page_soup.findAll("a", {"class": "pic_wrapper"})
 
    for i in containers:
        src = 'https://www.faktopedia.pl' + i.img['src']
  
        content = Meme()
        content.webservice="Faktopedia"
        content.memetype="Meme"
        content.thumb=src
        content.save()
        
def Mistrzowie(num=1):
    url = 'https://mistrzowie.org/page/' + str(num)

    page_html = requests.get(url)

    page_soup = BeautifulSoup(page_html.text, "html.parser")

    containers = page_soup.findAll("a", {"class": "pic_wrapper"})

    for i in containers:
        src = i.img['src']
        link = 'https://mistrzowie.org'+src
        
        content = Meme()
        content.webservice = "Mistrzowie"
        content.memetype = "Meme"
        content.thumb = link
        content.save()


        
def demotywatoryzer(num=1):
    url = 'https://demotywatory.pl/page/'+str(num)
 
    page_html = requests.get(url)
    page_soup = BeautifulSoup(page_html.text, "html.parser")
     
    containers = page_soup.findAll("div", {"class": "demotivator pic"})
    for i in containers:
         src= i.find("img")["src"]
         link = src
         content = Meme()
         content.webservice = "Demotywatory"
         content.memetype ="Meme"
         content.thumb = link
         content.save()
     
         
 

def all():
    Faktopedia()
    Mistrzowie()
    demotywatoryzer()
