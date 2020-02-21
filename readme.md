What is $$Docker?$$
it is a sealed enviornment on a linux enviornment and includes everything code and configuration wise for the application that you need.
things cant see in and things cant see out, it talks to other containers or programs through
docker needs a linux enviornment
Useful $$Docker$$ Terms
image
what is used to build the docker container
$$Remember$$
when needing access to the host machine from inside a container (i.e. localhost) refer to use `host.docker.internal`
Dont let your container fetch dependencies when they start
make the container include the dependencies inside themselves
Dont leave important work or things in stopped containers
you may accidentally delete them when a disk is full and lose everything
image name structure
`registry.example.com:port/organization/image-name:version-tag`
Flags
`docker run <image> <enviornment>` => docker run -ti ubuntu:latest bash
`-ti` => Terminal Interactive
`--rm` => delete container after exit
`-d` detached container that runs in the background
`-p 45678:45678` publish a port that can be accessed 'inside_port:outside_port'
`--name` explicitly give docker a name
`--net <network name>` allows you to place the container on a particular network - defualts to bridge which is less secure
`-v` creates a volume that can be shared
`--volume-from` allows you to share a volume from an existing container
`docker ps` => docker process status shows running docker containers
note: docker run makes containers from images
`-l` => which show the latest container to run
`-a` => show all containers even non running containers
`docker commit`
makes docker images from containers
`docker commit <name of container> <name to call it by>`
`docker exec`
`docker logs <container name>`
should give output on what happend to a crashed container (i.e. started with a wrong command or typo)
`docker kill <container name>`
stops a running container
`docker rm <container name>`
this will remove this as a container
`docker images`
we display all of the available images on your machine
`docker rmi <image id/image name>`
this will remove an image on your local machine
`docker build -t name-of-result .`
Example commands and what they do
**$$Building$$ $$and$$ $$Accessing$$ $$Containers$$**
`docker run --rm -ti ubuntu sleep 5`
start a container run for 5 seconds, exit, delete container
`docker run -ti ubuntu bash -c "sleep 3; echo all done"`
start a container, run a bash command then run a second bash command
`docker run -d -ti ubuntu bash`
start a container and run in detached in the background
`docker ps` => to get running container name
`docker attach <container_name>` => to get back into a detached container
`docker exec -ti <container name> bash`
allows you to execute a process in an existing container
in this case the bash process
$$Networking$$
`docker run --rm -ti -p 45678:45678 -p 45679:45679 --name echo-server ubuntu bash`
this till create a container that destorys itself on exit
publishes to ports of access 45678 and 45679
names the container 'echo-server'
uses the ubuntu image
starts the bash process
You can expicitly choose the internal docker port by adding `-p 45678:45678` this will say to access the container port 45678 internally you must use the hostmachine port of 45678
if you leave the flag as `-p 45678` docker will choose an open existing port at random
if you do this, run docker port <container name> to find the host machine port to access to be able to talk with the docker container
`docker network ls`
this will show the available networks for docker
`docker network create <network name>`
will create a new network that docker containers can use to communicate with eachother
`docker run --rm -ti --net <network name> --name <container name> <image> <process>`
this will start a container on whichever network you specify
`docker network connect <network name> <container name>`
will connect an existing docker container to an existing network
**$$Volumes$$**
`docker run -ti -v /Path/To/Folder/To/Share:/DirectoryOnContainerToShareWith ubuntu bash`
this will share a folder on the host machine with the container being created
`docker run -ti -v /folder-name ubuntu bash`
makes a container with a folder that can be shared with other containers
`docker run -ti --volumes-from <container with sharable folder> ubuntu bash`
creates a container that has shares a folder with an existing container
$$Dockerfile$$
`docker build -t name-of-result /Path/To/Dockerfile`
docker build takes a docker file and creates an image
`-t name-of-result` tags the image with a name

$$Docker$$ Networking
Program containers are isolated from the internet by default
Containers can be grouped into a private network
You can explicity choose who can connect to whom

Networking terms
bridge => network used by containers that dont specify any other network
host => when the container wont have network isolation
none => no network
Volumes
these are virtual discs to store and share data
two main varieties
Persistent => data will remain and is available on the host
Ephemeral => Only exists while a container is using them
these arent apart of images, they are for your local data and machine

**$$Docker$$ $$Files$$**
a small "program" to create an image
`docker build -t name-of-result .`
Look like shell scripts, but they are not
a process started on one line will not be running on the next line
**Terms**
FROM => what image to download and start from
MAINTAINER => firstname lastname <email>
RUN => runs a command line waits to finish and then saves the result
ADD => adds files to a path
ENV => sets envionment variables for the image
CMD => specifies a whole command to run
ENTRYPOINT => speficies the start of a command to run
EXPOSE => maps a port to a container
VOLUME => defines shared or ephemeral columes
WORKDIR => sets the directory the container starts in
USER => sets the user to run commands by a particular user
