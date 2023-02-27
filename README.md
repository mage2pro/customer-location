The «[**Customer Location**](https://mage2.pro/t/78)» module for Magento 2 detects a customer location (based on IP address) when he is placing an order and shows the location on the admin order page. 
The module is **free** and **open source**.

![](https://mage2.pro/uploads/default/original/1X/81b4f1e6e51f7bb7e429022065414247ccfb24e9.png)

## Installation 
[Hire me in Upwork](https://upwork.com/fl/mage2pro), and I will: 
- install and configure the module properly on your website
- answer your questions
- solve compatiblity problems with third-party checkout, shipping, marketing modules
- implement new features you need 

### 2. Self-installation
```
bin/magento maintenance:enable
rm -f composer.lock
composer clear-cache
composer require mage2pro/customer-location:*
bin/magento setup:upgrade
bin/magento cache:enable
rm -rf var/di var/generation generated/code
bin/magento setup:di:compile
rm -rf pub/static/*
bin/magento setup:static-content:deploy -f en_US <additional locales>
bin/magento maintenance:disable
```

## How to update
```
bin/magento maintenance:enable
composer remove mage2pro/customer-location
rm -f composer.lock
composer clear-cache
composer require mage2pro/customer-location:*
bin/magento setup:upgrade
bin/magento cache:enable
rm -rf var/di var/generation generated/code
bin/magento setup:di:compile
rm -rf pub/static/*
bin/magento setup:static-content:deploy -f en_US <additional locales>
bin/magento maintenance:disable
```