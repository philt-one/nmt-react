yarn install
cd ./api && pip install -r requirements.txt
mkdir model && cd model 
wget https://s3.amazonaws.com/opennmt-models/averaged-ende-export500k-v2.tar.gz
unzip averaged-ende-export500k-v2.tar.gz
rm averaged-ende-export500k-v2.tar.gz


