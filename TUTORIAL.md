# Learn Advanced Bash by Building

> Welcome to the Advanced Bash lessons!

## 10. Start the Terminal

### 10.1

**The first thing you need to do is start the terminal.** Do that by clicking the "hamburger" menu at the top left of the screen, going to the "terminal" section, and clicking "new terminal". Once you open a new one, type `echo hello bash` into the terminal and press enter.

#### HINTS

- Capitalization matters
- If the tests don't run automatically, try typing `exit` into the terminal and redoing the instructions

## 20. echo hello bash > stdout.txt

### 20.1

The command you just entered printed to the terminal. You can `redirect` that output to a file using `>`. Here’s an example: `<command> > <filename>`. Enter the same command but redirect the output into `stdout.txt`.

#### HINTS

- The last command was `echo hello bash`
- Enter `echo hello bash > stdout.txt` in the terminal

## 30. echo hello bash >> stdout.txt

### 30.1

A `stdout.txt` file was create. You should take a look at it. Instead of printing `hello bash` to the terminal, it **redirected** the output to the file. A single `>` will create or overwrite the file. Use the same command with `>>` to append to the file.

#### HINTS

- Here's an example: `<command> >> <filename>`
- You want to append the output of `echo hello bash` to `stdout.txt`
- The last command was `echo hello bash > stdout.txt`
- Enter `echo hello bash >> stdout.txt` in the terminal

## 40. echo hello bash > stdout.txt

### 40.1

Take a look at the file again. The output of `echo hello bash` was added to it.Use the command with one `>` again to overwrite the file.

#### HINTS

- Here's an example: `<command> > <filename>`
- Use `>` to redirect the output of `echo hello bash` to `stdout.txt` so it overwrites the file
- The last command was `echo hello bash >> stdout.txt`
- Enter `echo hello bash > stdout.txt` in the terminal

## 50. > stdout.txt

### 50.1

Take a look at the file. It was overwritten with the output of the command. Enter `> stout.txt` in the terminal to redirect nothing into the file. Effectively, emptying it.

#### HINTS

- Enter `> stdout.txt` in the terminal

## 60. bad_command

### 60.1

Next, enter `bad_command` in the terminal to see what happens. You will get an error.

#### HINTS

- Enter `bad_command` in the terminal

## 70. bad_command > stderr.txt

### 70.1

Enter the same command, but try to redirect the output to `stderr.txt` using `>`.

#### HINTS

- Here's an example: `<command> > <filename>`
- Make sure to use `stderr.txt` as the filename
- Enter `bad_command > stderr.txt` in the terminal

## 80. bad_command 2> stderr.txt

### 80.1

There’s two types of output, `stdout` (standard out) for when a command is successful, and `stderr` (standard error) for when it’s not. Both of these will print to the terminal by default. `bad_command` was not a valid command, so it printed to `stderr`. You can redirect `stderr` with `2>`. Enter the same command but redirect `stderr` to `stderr.txt`

#### HINTS

- Here's an example: `<command> 2> <filename>`
- Make sure to use `stderr.txt` as the filename
- Enter `bad_command 2> stderr.txt` in the terminal

## 90. echo hello bash 1> stdout.txt

### 90.1

Take a look at the `stderr.txt` file. The error was redirected to the file and nothing printed in the terminal. You used `2>` to redirect `stderr`. Similarily, you can use `1>` to redirect `stdout`. Enter `echo hello bash` again and use it to redirect `stdout` to the `stdout.txt` file.

#### HINTS

- Make sure to use `1>` to redirect `stdout`
- Make sure it's redirected to `stdout.txt`
- Enter `echo hello bash 1> stdout.txt` in the terminal

## 100. read NAME

### 100.1

`stdout` and `stderr` are for output. `stdin` (standard in) is the third thing commands can use and is for getting input. The default is the keyboard. Enter `read NAME` in the terminal to see a command that uses `stdin`.

#### HINTS

- Enter `read NAME` in the terminal

## 110. Enter your name

### 110.1

The `read` command is looking at `stdin` for where to get input, which is pointing to the keyboard. Type your name and press enter.

#### HINTS

- The last command should be `read NAME`
- If the tests don't pass, enter `read NAME` in the terminal, type your name and press enter

## 115. echo $NAME

### 115.1

Use `echo` to print the variable you just created.

#### HINTS

- Here's an example: `echo <VARIABLE>`
- You can use a variable like this: `$<VARIABLE>`
- Enter `echo $NAME` in the terminal

## 120. echo $NAME > stdout.txt

### 120.1

Use `echo` to print the `NAME` variable again, but redirect the `stdout` to `stdout.txt` so it overwrites the file.

#### HINTS

- Here's an example: `<command> > <filename>`
- Make sure to use `stdout.txt` as the filename
- Enter `echo $NAME > stdout.txt` in the terminal

## 140. echo freeCodeCamp > name.txt

### 140.1

Use `echo` and *redirection* to put the text `freeCodeCamp` in a `name.txt` file for some more testing. Remember that it will create the file if it doesn't exist.

#### HINTS

- Here's an example: `echo <text> > <filename>`
- Use `freeCodeCamp` as the text and `name.txt` as the filename
- Enter `echo freeCodeCamp > name.txt` in the terminal
- Make sure `freeCodeCamp` is the only text in the file

## 150. read NAME < name.txt

### 150.1

Just like you can redirect output, you can redirect `stdin` as well. Here's an example: `<command> < <filename_for_stdin>`. Use the `read` command to assign the `NAME` variable to the contents of `name.txt` by redirecting the `stdin`.

#### HINTS

- You want to use `read NAME` as the command and `name.txt` as the input
- Enter `read NAME < name.txt` in the terminal

## 160. echo $NAME

### 160.1

`stdin` was pointing to the `name.txt` file this time. Use `echo` to print the `NAME` variable again.

#### HINTS

- Here's an example: `echo <VARIABLE>`
- You can use a variable like this: `$<VARIABLE>`
- Enter `echo $NAME` in the terminal

## 170. echo your_name | read NAME

### 170.1

Another way to set the `stdin` is by using the pipe (`|`). It will use the output from one command as input for another. Here's an example: `<command_1> | <command_2>`. This will take the `stdout` from `command_1` and use it as the `stdin` for `command_2`. Use this method to **echo** your name and pipe the output into the `read` command which reads your name into the `NAME` variable.

#### HINTS

- Enter `echo <your_name> | read NAME`
- Replace `<your_name>` with your name

## 175. echo $NAME

### 175.1

Use echo to print the variable again.

#### HINTS

- Here's an example: `echo <VARIABLE>`
- You can use a variable like this: `$<VARIABLE>`
- Enter `echo $NAME` in the terminal

## 178. cat

### 178.1

It worked, but it doesn't look like it. When you used the pipe (`|`) to set the input for `read`, it ran the command in a subshell or subprocess. Basically, another terminal instance within the one you see. The variable was set in there and didn't affect the one you had previously set. `cat` is another command that takes input. Enter it in the terminal.

#### HINTS

- Enter `cat` in the terminal

## 180. end cat

### 180.1

`cat` will print the contents of a file or input to `stdout`. You didn't specify any input for the command. Feel free to type something and press enter. When you are done, press `control+c` to finish the command.

#### HINTS

- `cat` should be the last command entered
- Close the command with `control+c`

## 185. cat name.txt

### 185.1

`cat` can take a filename as an argument. Use it again with your `name.txt` file as an arguement to print the contents of the file.

#### HINTS

- Here's an example: `cat <filename>`
- Use the `name.txt` file
- Enter `cat name.txt` in the terminal

## 190. cat < name.txt

### 190.1

Enter the same command but use redirection to set the `stdin` to `name.txt`

#### HINTS

- Use `<` to redirect input
- Here's an example `<commnad> < <filename>`
- It was the `cat` command with the `name.txt` file
- Enter `cat < name.txt` in the terminal

## 200. echo your_name | cat

### 200.1

Use `echo` to print your name and pipe the output into the `cat` command.

#### HINTS

- Here's an example: `<command_1> | <command_2>`
- The first command should be `echo <your_name>`
- The second is `cat`
- Enter `echo <your_name> | cat` in the terminal
- Replace `<your_name>` with your name

## 210. touch script.sh

### 210.1

You should be starting to get the hang of how `stdin`, `stdout`, and `stderr` work but let's try another example with your own command. Use `touch` to create a file named `script.sh`.

#### HINTS

- Here's and example: `touch <filename>`
- Enter `touch script.sh` in the terminal
- Make sure you are in the `project` folder first

## 220. chmod +x script.sh

### 220.1

Give your new script executable permissions with the `chmod` command and the `+x` flag.

#### HINTS

- Here's and example: `chmod +x <filename>`
- Enter `chmod +x script.sh` in the terminal

## 230. Add shebang

### 230.1

This will be a very simple script with only a few command. At the top of file, add a shebang that looks like this: `#!/bin/bash`.

#### HINTS

- Add the suggestion at the top of the `script.sh` file
- Add `#!/bin/bash` at the top of the `script.sh` file

## 240. Add read NAME

### 240.1

Below the shebang, add a `read` command that reads input into a `NAME` variable.

#### HINTS

- Add the suggestion to the bottom of the `script.sh` file
- Add `read NAME` to the bottom of the `script.sh` file

## 250. Add echo Hello $NAME

### 250.1

Below that, use `echo` to print `Hello <name>` using the variable.

#### HINTS

- Add the suggestion to the bottom of the `script.sh` file
- Here's an example: `echo Hello <VARIABLE>`
- You can use a variable like this: `$<VARIABLE>`
- Use the `NAME` variable
- Add `echo Hello $NAME` to the bottom of the `script.sh` file

## 260. Add bad_command

### 260.1

One more thing. Add `bad_command` at the bottom of the file.

#### HINTS

- Add the suggestion to the bottom of the `script.sh` file
- Add `bad_command` to the bottom of the `script.sh` file

## 264. ./script.sh

### 264.1

Run your script and don't input anything until the next lesson.

#### HINTS

- Here's how you can run a script: `./<script_file>`
- Enter `./script.sh` in the terminal

## 266. end ./script.sh

### 266.1

The `read` command is waiting for input. Type your name and press enter.

#### HINTS

- The last command should be `./script.sh`
- Run `./script.sh` in the terminal and enter input when it is waiting

## 270. echo your_name | ./script

### 270.1

Your script needs input, and has two forms of output. Run the script again, but use a pipe to echo your name as the input.

#### HINTS

- Here's an example: `<command_1> | <command_2>`
- Use `echo <your_name>` as the first command
- And `./script.sh` as the second
- Enter `echo <your_name> | ./script.sh` in the terminal
- Replace `<your_name>` with your name

## 280. echo your_name | ./script 2> stderr

### 280.1

It didn't ask for input this time because you gave it input with the pipe. The two types of output were printed in the terminal. Run the same command but redirect and `stderr` output the `stderr.txt`

#### HINTS

- The previous command was `echo <your_name> | ./script.sh`
- You can redirect `sterr` output with `2>`
- Here's an example: `<previous_command> 2> <filename>`
- Enter `echo <your_name> | ./script.sh 2> stderr.txt`

## 290. echo your_name | ./script 2> stderr 1> stdout

### 290.1

Again, it didn't ask for input. This time it only printed your name to the terminal and not the output of `bad_command`. That produced an error, which you redirected to the `stderr.txt` file. You redirect both the `stderr` and `stdout` by adding another redirection at the end like this: `> <filename>`. Enter the same command, redirect the `stderr` to the same place and the `stdout` to `stdout.txt`

#### HINTS

- Here's another example: `<commands> 2> <filename> > <filename>`
- The previous command was `echo <your_name> | ./script.sh 2> stderr.txt`
- Add `> stdout.txt` to the end of the previous command
- Enter `echo <your_name> | ./script.sh 2> stderr.txt > stdout.txt` in the terminal

## 300. ./script < name

### 300.1

It didn't ask for input and nothing was printed in the terminal that time. You redirected both outputs to files. Run your script using redirection to set `name.txt` as the input. Don't redirect any of the output.

#### HINTS

- You should have a `name.txt` file with only the text `freeCodeCamp` in it
- Here's an example: `<command> < <filename>`
- Enter `./script.sh < name.txt` in the terminal

## 310. ./script < name 2> stderr

### 310.1

Excellent. Run the same command, but redirect the `stderr` to `stderr.txt`.

#### HINTS

- The previous command was `./script.sh < name.txt`
- You can redirect `sterr` output with `2>`
- Here's an example: `<previous_command> 2> <filename>`
- Enter `./script.sh < name.txt 2> stderr.txt`

## 320. ./script < name 2> stderr 1> stdout

### 320.1

Nice job! Run it again, redirect the `stderr` to the same place and the `stdout` to `stdout.txt`

#### HINTS

- You can redirect `stdout` with `>`
- Here's an example: `<commands> 2> <filename> > <filename>`
- The previous command was `./script.sh < name.txt 2> stderr.txt`
- Add `> stdout.txt` to the end of the previous command
- Enter `./script.sh < name.txt 2> stderr.txt > stdout.txt` in the terminal

## 330. wc kitty_ipsum_1

### 330.1

:smile: You should have two `kitty_ipsum` files. Eventually, you will write a small script to translate them into doggy ipsum. For now, you will play with some common commands. The first one is `wc`. It prints some info about a file. It can take a file as an argument like the `cat` command. Use it to see what it shows you about your `kitty_ipsum_1.txt` file.

#### HINTS

- Here's an example: `wc <filename>`
- Enter `wc kitty_ipsum_1.txt` in the terminal

## 340. man wc

### 340.1

Not quite sure what all those numbers mean. Check the manual of the `wc` command to see if you can find out more.

#### HINTS

- View the manual of a command with `man`
- Here's an example: `man <command>`
- Enter `man wc` in the terminal

## 350. wc -l kitty_ipsum_1

### 350.1

`wc` stands for `word count`. It showed you how many lines were in the file, how many words, and how many bytes. Use the `-l` flag to only output how many lines are in the file. Don't do any redirecting of input or output.

#### HINTS

- Here's an example `<command> <flag> <filename>`
- Enter `wc -l kitty_ipsum_1.txt` in the terminal

## 360. wc -w kitty_ipsum_1

### 360.1

Check how many words are in the file.

#### HINTS

- Don't use any redirection
- Check the manual with `man wc` to find the flag you need
- It's the `-w` flag
- Enter `wc -w kitty_ipsum_1.txt` in the terminal

## 370. wc -m kitty_ipsum_1

### 370.1

Lastly, check how many characters are in the file.

#### HINTS

- Don't use any redirection
- Check the manual with `man wc` to find the flag you need
- It's the `-m` flag
- Enter `wc -w kitty_ipsum_1.txt` in the terminal

## 380. wc kitty_ipsum_1

### 380.1

Use the command without any flags.

#### HINTS

- Don't use any redirection
- Enter `wc kitty_ipsum_1.txt` in the terminal

## 390. cat kitty_ipsum_1 | wc

### 390.1

That outputs the all the info. Although, it's showing the byte count and not the character count. Some characters must be more than one byte. Use `cat` to pipe the content of the file as the input of the `wc` command.
Try using `cat` the print the file and pipe the output into the `wc` command.

#### HINTS

- Here's an example: `<command_1> | <command_2>`
- The first command should be `cat kitty_ipsum_1.txt`
- The second is `wc`
- Enter `cat kitty_ipsum_1.txt | wc` in the terminal

## 400. wc < kitty_ipsum_1

### 400.1

It looks like the way you give input to a command may affect the output. It only printed the numbers that time and not the filename. Try using redirection to see what the same file outputs with that command.

#### HINTS

- You can redirect input with `<`
- Here's an example: `<command> < <filename>`
- Enter `wc < kitty_ipsum_1.txt` in the terminal

## 420. echo ~~ kitty_ispsum_1.txt info ~~ > kitty_info

### 420.1

You are going to create a file that has some meta information about the two kitty ipsum files in it. Use `echo` and redirection to print `~~ kitty_ispsum_1.txt info ~~` to a file named `kitty_info.txt`. Make sure to place the text in quotes.

#### HINTS

- Remember that redirecting output will create the file if it doesn't exist
- You can redirect output with `>`
- Here's an example: `<command> > <filename>`
- Enter `echo "~~ kitty_ipsum_1.txt info ~~" > kitty_info.txt` in the terminal
- Make sure to use quotes around the text

## 430. echo Number of lines >> kitty_info

### 430.1

Use `echo` and the `-e` flag with the new line character (`\n`) to **append** `Number of lines:` to the `kitty_info.txt` file. Add the new line character at the beginning of the text so there's an empty line. Remember that you can append output to a file with `>>`.

#### HINTS

- Here's an example: `<command> >> <filename>`
- The command you want is `echo -e "\nNumber of lines:"`
- Enter `echo -e "\nNumber of lines:" >> kitty_info.txt`

## 440. cat kitty_ipsum_1 | wc -l >> kitty_info

### 440.1

You should be able to find out how many lines are in the `kitty_ipsum_1.txt` file and add that number to the `kitty_info.txt` file. Use the `cat` command to pipe the content of `kitty_ipsum_1.txt` as input for the `wc` command. Use the flag for getting the number of lines from that input and **append** the number to the `kitty_info.txt` file.

#### HINTS

- Here's an example: `cat <filename> | wc <flag> >> <filename>`
- The flag you want is `-l`
- You previously used `cat kitty_ipsum_1.txt | wc`
- Enter `cat kitty_ipsum_1.txt | wc -l >> kitty_info.txt` in the terminal

## 450. echo -e Number of words: >> kitty_info

### 450.1

Next, you want to put a word count of the file in the info. Use `echo` again to append `Number of words:` to `kitty_info.txt`. Put a new line in front of the text like you did for the first one.

#### HINTS

- Here's an example: `<command> >> <filename>`
- You want the `echo` command with the `-e` flag and the new line character (`\n`)
- You previously entered `echo -e "\nNumber of lines:" >> kitty_info.txt`
- Enter `echo -e "\nNumber of words:" >> kitty_info.txt` in the terminal

## 460. cat kitty_ipsum_1 | wc -w >> kitty_info

### 460.1

Use `cat` and the pipe method again to append the number of words in `kitty_ipsum_1.txt` to `kitty_info.txt`.
cat kitty_ipsum_1.txt | wc -w >> kitty_info

#### HINTS

- Here's an example: `cat <filename> | wc <flag> >> <filename>`
- The flag you want is `-w`
- You previously used `cat kitty_ipsum_1.txt | wc -l >> kitty_info.txt`
- Enter `cat kitty_ipsum_1.txt | wc -w >> kitty_info.txt` in the terminal

## 470. echo -e Number of characters: >> kitty_info

### 470.1

Next, you want to add the number of characters. Use the `echo` command with redirection to append `Number of characters:`, with a new line in front of it, to `kitty_info.txt` like you did with the other sentences.

#### HINTS

- Here's an example: `<command> >> <filename>`
- You want the `echo` command with the `-e` flag and the new line character (`\n`)
- You previously entered `echo -e "\nNumber of words:" >> kitty_info.txt`
- Enter `echo -e "\nNumber of characters:" >> kitty_info.txt` in the terminal

## 480. wc -m < kitty_ipsum_1 >> kitty_info

### 480.1

Append the number of characters in `kitty_ipsum_1.txt` to `kitty_info.txt`. Use the redirection method as the input for the `wc` command this time instead of the piping method.

#### HINTS

- You can redirect input with `<`
- Here's an example: `<command> < <input_filename> >> <output_filename>`
- Use the `-m` flag with the `wc` command to find the number of characters in a file
- You previously used `wc < kitty_ipsum_1.txt`
- Enter `wc -m < kitty_ipsum_1.txt >> kitty_info.txt`

## 490. grep meow kitty_ipsum_1

### 490.1

`grep` is a command for searching for patterns in text. You can use it like this: `grep '<pattern>' <filename>`. Use it to search for the pattern `meow` in the `kitty_ipsum_1.txt` file.

#### HINTS

- Enter `grep 'meow' kitty_ipsum_1.txt` in the terminal

## 500. man grep

### 500.1

It showed you all the lines that contain `meow` somewhere in them, but it’s a little messy. View the manual of `grep` to see if you can find anything to help.

#### HINTS

- View a man with `man <command>`
- Enter `man grep` in the terminal

## 510. grep --color meow kitty_ipsum_1

### 510.1

Use `grep` to search for the `meow` pattern in the same file, but add the `--color` flag to see if it's a little more helpful.

#### HINTS

- Here's an example: `grep <flag> '<pattern>' <filename>`
- You previously entered `grep 'meow' kitty_ipsum_1.txt`
- Enter `grep --color 'meow' kitty_ipsum_1.txt` in the terminal

## 520. grep --color -n cat kitty_ipsum_1

### 520.1

That’s better. Add the flag to show all the line numbers with the command.

#### HINTS

- View the manual `man grep` to find the flag you need
- It's the `-n` flag
- The last command was `grep --color 'meow' kitty_ipsum_1.txt`
- Enter `grep --color -n 'meow' kitty_ipsum_1.txt` in the terminal

## 530. grep --color -n meow[a-z] kitty_ipsum_1

### 530.1

Cool. `grep` can use regular expressions, too. Enter the previous command, but change the pattern to `meow[a-z]*` to see all words that start with `meow`.

#### HINTS

- The last command was `grep --color -n 'meow' kitty_ipsum_1.txt`
- Enter `grep --color -n 'meow[a-z]*' kitty_ipsum_1.txt` in the terminal

## 540. echo -e \nNumber of times meow or meowzer appears: >> kitty_info

### 540.1

The file contains `meow` and `meowzer`. Use the `echo` command and redirection to append the text `Number of times meow or meowzer appears:`, with a new line in front of it, to the `kitty_info.txt` file.

#### HINTS

- Here's an example: `<command> >> <filename>`
- You want the `echo` command with the `-e` flag and the new line character (`\n`)
- You previously entered `echo -e "\nNumber of characters:" >> kitty_info.txt`
- Enter `echo -e "\nNumber of times meow or meowzer appears:" >> kitty_info.txt` in the terminal

## 550. grep --color meow[a-z] kitty_ipsum_1

### 550.1

So how can you find how many times those two words appear. Use grep to find the `meow[a-z]*` pattern in the file again to see how many times they appear. Add the `--color` flag to the command.

#### HINTS

- Enter `grep --color 'meow[a-z]*' kitty_ipsum_1.txt` in the terminal

## 560. grep -c meow[a-z] kittpy_ipsum_1

### 560.1

It looks like seven, but how can you get a count from the command line to append to the info file? `grep` has a `-c` flag to give you a count. Enter the last command but use that instead of the `--color` flag.

#### HINTS

- Enter `grep -c 'meow[a-z]*' kittpy_ipsum_1.txt` in the terminal

## 570. man grep

### 570.1

That gave you a count of the number lines that the pattern occurred on. Check the manual of grep to see if there's a way to find a count of all the words matched.

#### HINTS

- View a man with `man <command>`
- Enter `man grep` in the terminal

## 580. grep -o meow[a-z] kitty_1

### 580.1

It doesn't look like that's an option. But there is a `-o` flag that will says it will put the matches on their own lines. Try that one with that command instead of the `-c` flag.

#### HINTS

- The command was `grep -c `
- Enter `grep -o 'meow[a-z]*' kitty_ipsum_1.txt`

## 590. grep -o meow[a-z] kitty_1 | wc -l

### 590.1

That gave you each match on it's own line. You can use the `wc` command again to get a count of the lines to find out how many matches there are. Pipe the output of the last command into the `wc` command and use the `-l` to get a count of the lines.

#### HINTS

- The last command was `grep -o 'meow[a-z]*' kitty_ipsum_1.txt`
- Here's an example: `<command_1> | <command_2>`
- Enter `grep -o 'meow[a-z]*' kitty_ipsum_1.txt | wc -l` in the terminal

## 600. grep -o meow[a-z] kitty_1 | wc -l >> kitty_info

### 600.1

Awesome. There's your count of how many times those words appear. Enter the same command but append the number to the `kitty_info.txt` file.

#### HINTS

- The last command was `grep -o 'meow[a-z]* kitty_1' | wc -l`
- Append output to a file with `>> <filename>`
- Enter `grep -o 'meow[a-z]* kitty_1' | wc -l >> kitty_info` in the terminal

## 610. echo -e \nLines that they appear on: >> kitty_info

### 610.1

Append the text `Lines that they appear on:` to the `kitty_info.txt` file. Use the `echo` command with the `-e` flag again and put a new line in front of the text.

#### HINTS

- Here's an example: `<command> >> <filename>`
- You want the `echo` command with the `-e` flag and the new line character (`\n`)
- You previously entered `echo -e "\nNumber of times meow or meowzer appears:" >> kitty_info.txt`
- Enter `echo -e "\nLines that they appear on:" >> kitty_info.txt` in the terminal

## 620. grep -n meow[a-z] kitty_ipsum_1

### 620.1

There was a `-n` flag with `grep` to get line numbers. Use it to check the `kitty_ipsum_1.txt` file for the `meow[a-z]*` pattern again. 

#### HINTS

- Here's an example: `grep <flag> '<pattern>' <filename>`
- Enter `grep -n 'meow[a-z]*' kitty_ipsum_1.txt` in the terminal

## 630. man grep

### 630.1

Check the `grep` manual to see if there's a way to get just the line numbers.

#### HINTS

- View a man with `man <command>`
- Enter `man grep` in the terminal

## 635. cat name.txt

### 635.1

There doesn't appear to be a way to just get the line numbers. There's `sed` a command for replacing text that might work. First, some practice. Use `cat` to print the `name.txt` file in the terminal. It should still say `freeCodeCamp`.

#### HINTS

- Enter `cat name.txt` in the terminal
- The file should only have the text `freeCodeCamp`

## 640. sed s/r/2/ name.txt

### 640.1

`sed` can replace text like this: `sed 's/<pattern_to_replace>/<text_to_replace_it_with>/' <filename>`. By default, it won't replace the text in the file. It will just output it to `stdout`. Use it to replace `r` with `2` in the `name.txt` file and the output prints to the terminal.

#### HINTS

- Check the example again
- The pattern is `r`, the replacement text is `2`
- Enter `sed 's/r/2/' name.txt` in the terminal

## 650. sed s/free/f233/ name.txt

### 650.1

Use it again to replace `free` with `f2ee` in the same way.

#### HINTS

- Here's the example: `sed 's/<pattern_to_replace>/<text_to_replace_it_with>/' <filename>`
- The pattern is `free`, the replacement text is `f233`
- You previously used `sed 's/r/2/' name.txt`
- Enter `sed 's/free/f233/' name.txt` in the terminal

## 660. sed s/freecodecamp/f233C0d3C@mp/ name.txt

### 660.1

Do it again, replacing `freecodecamp` with `f233C0d3C@mp`. 

#### HINTS

- Here's the example: `sed 's/<pattern_to_replace>/<text_to_replace_it_with>/' <filename>`
- The pattern is `freecodecamp`, the replacement text is `f233C0d3C@mp`
- You previously used `sed 's/free/f233/' name.txt`
- Enter `sed 's/freecodecamp/f233C0d3C@mp/' name.txt` in the terminal

## 670. sed s/freecodecamp/f233C0d3C@mp/i name.txt

### 670.1

Nothing was replaced in that output. You can add regex flags after the last `/` in the `sed` argument. For instance, a `g`, for `global`, would replace all instances of a matched pattern, or an `i` to ignore the case of the pattern. Enter the same command but add the correct regex flag to ignore the case.

#### HINTS

- Here's an example: `sed 's/<pattern>/<replacement>/<regex_flags>' <filename>`
- The pattern is `freecodecamp`, the replacement text is `f233C0d3C@mp` and the regex flag is `i`
- The last command was `sed 's/freecodecamp/f233C0d3C@mp/' name.txt`
- Enter `sed 's/freecodecamp/f233C0d3C@mp/i' name.txt` in the terminal

## 675. sed s/freecodecamp/f233C0d3C@mp/i < name.txt

### 675.1

As with any command the input can be redirected. Use the same `sed` replacement and file but redirect the input this time.

#### HINTS

- The previous command was `sed 's/freecodecamp/f233C0d3C@mp/i' name.txt`
- Here's an example: `<command> < <filename>`
- Enter `sed 's/freecodecamp/f233C0d3C@mp/i' < name.txt` in the terminal

## 680. cat name.txt | sed s/freecodecamp/f233C0d3C@mp/i

### 680.1

Or, you can use `cat` to output the file contents and pipe it into the `sed` command. Do that with the same file and `sed` replacement.
cat name.txt | sed 's/freecodecamp/f233C0d3C@mp/i'

#### HINTS

- The previous command was `sed 's/freecodecamp/f233C0d3C@mp/i' < name.txt`
- Here's an example: `cat <filename> | <command>`
- Enter `cat name.txt | sed 's/freecodecamp/f233C0d3C@mp/i'` in the terminal


## 690. grep -n meow[a-z] kitty_1

### 690.1

Back to the task at hand. Use `grep` with the flag to show line numbers to find the `meow[a-z]*` pattern in the `kitty_ipsum_1.txt` file again.

#### HINTS

- Enter `man grep` to find the flag you need
- It's the `-n` flag
- Here's an example: `grep -n <pattern> <filename>`
- Enter `grep -n 'meow[a-z]*' kitty_ipsum_1.txt` in the terminal

## 700. grep meow[a-z] kitty_1 -n | sed s/[0-9]/1/

### 700.1

You're going to use `sed` to extract the line numbers from that output. Enter the last command and pipe the output into `sed` that replaces `[0-9]` with `1`.

#### HINTS

- A `sed` argument looks like this: `'s/<pattern>/<replacement>/'`
- The `sed` argument is `s/[0-9]/1/`
- The last command was `grep -n 'meow[a-z]*' kitty__ipsum_1.txt`
- Here's an example: `grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed '<pattern>'`
- Enter `grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed 's/[0-9]/1/'` in the terminal

## 710. grep meow[a-z]* kitty_1 -n | sed s/[0-9]+/1/

### 710.1

That replaced the first line number with `1` on each line. Enter the same command but change the matching pattern to `[0-9]+` to match one or more numbers.

#### HINTS

- The previous command was `grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed 's/[0-9]/1/'`
- Change the `sed` argument to `'s/[0-9]+'/1/`
- Enter `grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed 's/[0-9]+/1/'`

## 720. man sed

### 720.1

That didn't replace anything. Check the manual of `sed` quick to see if there's anything to help.

#### HINTS

- View a man with `man <command>`
- Enter `man grep` in the terminal

## 730. grep meow[a-z]* kitty_1 -n | sed -E s/[0-9]+/1/

### 730.1

There's a flag to use extended regular expressions with `sed`. Add it to that previous command that didn't work so it recognizes the `+` in your pattern. The command was `grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed 's/[0-9]+/1/'`.

#### HINTS


- Find the flag you need from the menu and add it to the previous command
- Here's an example: `<command> | sed <flag> '<argument>'`
- It's the `-E` flag
- Enter `grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed -E 's/[0-9]+/1/'` in the terminal

## 740. grep meow[a-z]* kitty_1 -n | sed -E s/([0-9]+)/\1/

### 740.1

It worked that time. It replaced all the numbers at the start with a `1`. Next, you will use a capture group in the regex to capture the numbers so you can use them in the replacement area. Enter the same command but use `s/([0-9]+)/\1/` with `sed` to capture the numbers at the start. It will replace them with themselves for now.

#### HINTS

- The previous command was `grep 'meow[a-z]*' kitty_ipsum_1.txt -n | sed -E 's/[0-9]+/1/'`
- Enter `grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed -E 's/([0-9]+)/\1/'` in the terminal

## 750. grep meow[a-z]* kitty_1 -n | sed -E s/([0-9]+).*/\1/

### 750.1

That matched all the numbers and replaced them with the same numbers. All you need to do is match everything else on each line and replace it with only the numbers. Add `.*` at the end of the `sed` matching pattern so it mathes everything, captures the numbers, and replaces everything with the captured numbers.

#### HINTS

- The previous command was `grep 'meow[a-z]*' kitty_ipsum_1.txt -n | sed -E 's/([0-9]+)/\1/'`
- Enter `grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed -E 's/([0-9]+).*/\1/'` in the terminal

## 760. previous with >> kitty_info

### 760.1

There's your list of numbers for the `kitty_info.txt` file. Enter the same command and append the list of numbers to it.

#### HINTS

- The previous command was `grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed -E 's/([0-9]+).*/\1/'`
- Here's an example: `<command> >> <filename>`
- Append the output of the previous command with `>> kitty_info.txt`
- Enter `grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed -E 's/([0-9]+).*/\1/' >> kitty_info.txt` in the terminal

## 770. grep cat[a-z]* kitty_1 —-color

### 770.1

Take a look at the file. Hopefully it doesn't look too messy. There's one more group of words to find info on for this file. Use `grep` with the `--color` flag to see all the words that start with `cat` in the same file. Use a similar pattern that you used to find words starting with `meow`

#### HINTS

- You use `meow[a-z]*` to see all the words that start with `meow`
- Use `cat[a-z]*` as your pattern
- Here's an example: `grep --color '<pattern>' <filename>`
- Enter `grep --color 'cat[a-z]*' kitty_ipsum_1.txt` in the terminal

## 780. echo Number of times cat, cats, or catnip appears: >> kitty_info

### 780.1

Looks like there's three variations of words starting with `cat`. Use `echo` with the `-e` flag to append `Number of times cat, cats, or catnip appears:` to the `kitty_info.txt` file. Put a new line at the beginning of the text like the other lines.

#### HINTS

- Enter `echo -e "\nNumber of times cat, cats, or catnip appears:" >> kitty_info.txt` in the terminal 

## 790. grep cat[a-z]* kitty_1 -o

### 790.1

grep 'cat[a-z]*' kitty_1 -o

#### HINTS

- Hint

## 800. grep cat[a-z]* kitty_1 -o | wc -l

### 800.1

grep 'cat[a-z]*' kitty_1 -o | wc -l

#### HINTS

- Hint

## 810. grep cat[a-z]* kitty_1 -o | wc -l >> kitty_info 

### 810.1

grep 'cat[a-z]*' kitty_1 -o | wc -l >> kitty_info 

#### HINTS

- Hint

## 820. echo -e Lines that they appear on: >> kitty_info

### 820.1

echo -e "\nLines that they appear on:" >> kitty_info

#### HINTS

- Hint

## 830. grep cat[a-z]* kitty_1 -n

### 830.1

grep 'cat[a-z]*' kitty_1 -n

#### HINTS

- Hint

## 840. grep cat[a-z]* kitty_1 -n | sed -E s/([0-9]+).*/\1/

### 840.1

grep 'cat[a-z]*' kitty_1 -n | sed -E 's/([0-9]+).*/\1/'

#### HINTS

- Hint

## 850. previous with >> kitty_info

### 850.1

grep 'cat[a-z]*' kitty_1 -n | sed -E 's/([0-9]+).*/\1/'
previous with >> kitty_info

#### HINTS

- Hint

## 860. echo -e \n\n~~ kitty_ispsum_2.txt info ~~ > kitty_info

### 860.1

echo -e "\n\n~~ kitty_ispsum_2.txt info ~~" > kitty_info

#### HINTS

- Hint

## 870. echo -e \nNumber of lines: >> kitty_info

### 870.1

echo "\nNumber of lines:" >> kitty_info

#### HINTS

- Hint

## 880. cat kitty_2 | wc -l >> kitty_info

### 880.1

cat kitty_ipsum_2.txt | wc -l >> kitty_info

#### HINTS

- Hint

## 890. echo -e \nNumber of words: >> kitty_info

### 890.1

echo -e "\nNumber of words:" >> kitty_info

#### HINTS

- Hint

## 900. cat kitty_ipsum_2.txt | wc -w >> kitty_info

### 900.1

cat kitty_ipsum_2.txt | wc -w >> kitty_info

#### HINTS

- Hint

## 910. echo -e \nNumber of characters: >> kitty_info

### 910.1

echo -e "\nNumber of characters:" >> kitty_info

#### HINTS

- Hint

## 920. wc -m < kitty_ipsum_2.txt >> kitty_info

### 920.1

wc -m < kitty_ipsum_2.txt >> kitty_info

#### HINTS

- Hint

## 930. echo -e \nNumber of times meow or meowzer appears: >> kitty_info

### 930.1

echo -e "\nNumber of times meow or meowzer appears:" >> kitty_info

#### HINTS

- Hint

## 940. do it

### 940.1

do it

#### HINTS

- Hint

## 950. echo -e \nLines that they appear on: >> kitty_info

### 950.1

Echo -e "\nLines that they appear on:" >> kitty_info

#### HINTS

- Hint

## 960. do it

### 960.1

do it

#### HINTS

- Hint

## 970. echo -e \nNumber of times cat, cats, or catnip appears: >> kitty_info

### 970.1

echo -e "\nNumber of times cat, cats, or catnip appears:" >> kitty_info

#### HINTS

- Hint

## 980. do it

### 980.1

do it 

#### HINTS

- Hint

## 990. echo -e \nLines that they appear on: >> kitty_info

### 990.1

Echo -e "\nLines that they appear on:" >> kitty_info

#### HINTS

- Hint

## 1000. do it

### 1000.1

do it

#### HINTS

- Hint
