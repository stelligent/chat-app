# -*- mode: ruby -*-
# vi: set ft=ruby :

Vagrant.configure('2') do |config|
  config.vm.box = 'centos/7'
  config.vm.synced_folder '.', '/vagrant', type: 'nfs'
  config.vm.network :private_network, ip: '192.168.10.10'
  [{ 'guest' => 3030, 'host' => 3030 }].each do |fp|
    config.vm.network :forwarded_port, guest: fp['guest'],
                                       host: fp['host'],
                                       auto_correct: true
  end
  config.vm.provider 'virtualbox' do |vb|
    # Do not display the VirtualBox GUI when booting the machine
    vb.gui = false
    vb.memory = '2048'
  end

  config.vm.provision 'shell', privileged: true, inline: <<-SHELL
    yum update -y
  SHELL

  config.vm.provision 'shell', privileged: false, inline: <<-SHELL
    readonly NVM_INSTALL_SCRIPT='https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh'
    readonly NODE_VERSION='6.0.0'

    if [[ ! $(which nvm) ]]; then
      curl -o- "$NVM_INSTALL_SCRIPT" | bash
      export NVM_DIR="/home/vagrant/.nvm"
      [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"
    fi

    if [[ ! $(which node) ]]; then
      nvm install "$NODE_VERSION"
      nvm use "$NODE_VERSION"
    fi
  SHELL
end
