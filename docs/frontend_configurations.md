# Configuring Dev.Hub's Front End

The Dev.Hub aims to be extremely configurable. The configuration is/should always be in `JSON` format.

## Location

Most configuration files should be located within `/web/config/`

## Configs are Separated by Directories

You will notice all config files are in their own directories. While this adds cluster, it also
enables the config files to be separately mounted (as a volume) when this app is run as a container. 