# Setup VSCode to use Docker Containers for Development

## Install Docker for Linux (Ubuntu)
### Prereq's
```bash
sudo apt install \
     ca-certificates \
     curl \
     gnupg \
     lsb-release
```

Install Docker's official GPG key:
```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

Use the following command to set up the stable repository:
```
echo \
"deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \
$(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```

Install Docker Engine:
```
sudo apt update
sudo apt install docker-ce docker-ce-cli containerd.io
```
 
Verify Docker Engine is installed correctly:
```
sudo docker run hello-world
```
 
### Install Docker Compose for Linux
Download the current stable release:
```
 sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

```

Apply executable permissions to the binary:
```
 sudo chmod +x /usr/local/bin/docker-compose
```

Add to local path:
```
 sudo ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose
```

Test installation:
```
 docker-compose --version
```

Add your user to the docker group:
```
sudo usermod -aG docker $USER
```

### Install VSCode 
**NOTE:** The Ubuntu snap package is not supported
```
sudo apt update
sudo apt install software-properties-common apt-transport-https wget

Import the Microsoft GPG key:
wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add -

And enable the Visual Studio Code repository:
sudo add-apt-repository "deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main"

Once the apt repository is enabled , install the Visual Studio Code package:
sudo apt install codecod
```

In VSCode install the Remote-Containers extension.

HACK:
```
sudo chmod 777 /var/run/docker.sock
```


 

