FROM  circleci/node
USER root
RUN mkdir -p react
# install and configure gcloudSDK
RUN curl -sSL https://sdk.cloud.google.com | bash
ENV PATH $PATH:/root/google-cloud-sdk/bin

#install terraform and packer
RUN wget https://releases.hashicorp.com/terraform/0.11.2/terraform_0.11.2_linux_amd64.zip
RUN wget https://releases.hashicorp.com/packer/1.1.3/packer_1.1.3_linux_amd64.zip


RUN  unzip packer_1.1.3_linux_amd64.zip \
  && chmod +x packer \
  && mv packer /usr/local/bin/ \
  && unzip terraform_0.11.2_linux_amd64.zip \
  && chmod +x terraform \
  && mv terraform /usr/local/bin/
    
  USER circleci
