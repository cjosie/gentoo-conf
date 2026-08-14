#!/bin/bash
# this is the first script I'm really writing myself, thus the comments - josie Aug 13 2026

set -eu
# e exits on any command not "0", u errors on unset variables (typo catch)

#check if root, else doas -- P.S. the spaces *are* necessary for commands []
if [ "$(id -u)" -ne 0 ]; then
	printf 'doas req for portage.\n' >&2
	exec doas "$0" "$@"
fi
# this authenticates with doas for all following commands, no need to re-state it                           
# (it'll try and escalate to root if you emerge --sync

emerge --sync

if emerge -auvDN @world; then
	emerge -a --depclean
else
	printf 'update declined or failed, skipping depclean'
	exit 1
fi
