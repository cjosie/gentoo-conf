function ls --wraps=eza --description 'josie standard ls'
    eza -l --icons auto --git --no-filesize $argv
end
