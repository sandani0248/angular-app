FROM nginx:latest
MAINTAINER sandani <shane.sandani@gmail.com>
CMD ["service","nginx","start"]
CMD ["chkconfig","nginx","on"]
