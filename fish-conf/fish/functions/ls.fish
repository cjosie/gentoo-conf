function ls --wraps=eza --description 'josie standard ls'
    eza -l --icons auto --no-permissions --no-user --git --no-filesize $argv
end
