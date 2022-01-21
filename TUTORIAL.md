# Learn Advanced Bash by Building a Kitty Ipsum Translator

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

Now the variable is set to the content of the file, which was the input. Another way to set the `stdin` is by using the pipe (`|`). It will use the output from one command as input for another. Here's an example: `<command_1> | <command_2>`. This will take the `stdout` from `command_1` and use it as the `stdin` for `command_2`. Use this method to **echo** your name and pipe the output into the `read` command which reads your name into the `NAME` variable.

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

- Here's an example: `touch <filename>`
- Enter `touch script.sh` in the terminal
- Make sure you are in the `project` folder first

## 220. chmod +x script.sh

### 220.1

Give your new script executable permissions with the `chmod` command and the `+x` flag.

#### HINTS

- Here's an example: `chmod +x <filename>`
- Enter `chmod +x script.sh` in the terminal

## 230. Add shebang

### 230.1

This will be a very simple script with only a few commands. At the top of file, add a shebang that looks like this: `#!/bin/bash`.

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

Your script takes input from `stdin` and will output to `stdout` and `stderr`. Run your script and don't input anything for now.

#### HINTS

- Here's how you can run a script: `./<script_file>`
- Enter `./script.sh` in the terminal

## 266. end ./script.sh

### 266.1

The `read` command in your script is waiting for input. Type your name and press enter.

#### HINTS

- The last command should be `./script.sh`
- Run `./script.sh` in the terminal and enter input when it is waiting

## 270. echo your_name | ./script

### 270.1

You input your name, and your script output the result of the two commands. Run the script again, but use a pipe to echo your name as the input.

#### HINTS

- Here's an example: `<command_1> | <command_2>`
- Use `echo <your_name>` as the first command
- And `./script.sh` as the second
- Enter `echo <your_name> | ./script.sh` in the terminal
- Replace `<your_name>` with your name

## 280. echo your_name | ./script 2> stderr

### 280.1

It didn't ask for input this time because you gave it input with the pipe. The two types of output were printed in the terminal. Run the same command but redirect `stderr` output to the `stderr.txt`

#### HINTS

- The previous command was `echo <your_name> | ./script.sh`
- You can redirect `sterr` output with `2>`
- Here's an example: `<previous_command> 2> <filename>`
- Enter `echo <your_name> | ./script.sh 2> stderr.txt`

## 290. echo your_name | ./script 2> stderr 1> stdout

### 290.1

Again, it didn't ask for input. This time it only printed your name to the terminal and not the output of `bad_command`. That produced an error, which you redirected to `stderr.txt`. Take a look at that file. You can redirect both the `stderr` and `stdout` by adding another redirection at the end like this: `> <filename>`. Enter the same command, redirect the `stderr` to the same place again, and the `stdout` to `stdout.txt`.

#### HINTS

- Here's another example: `<commands> 2> <filename> > <filename>`
- The previous command was `echo <your_name> | ./script.sh 2> stderr.txt`
- Add `> stdout.txt` to the end of the previous command
- Enter `echo <your_name> | ./script.sh 2> stderr.txt > stdout.txt` in the terminal

## 300. ./script < name

### 300.1

It didn't ask for input and nothing was printed in the terminal that time. You redirected both outputs to files. You should take a look at them to see if they have what you expected. Run your script again, use redirection to set `name.txt` as the input. Don't redirect any of the output.

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

## 324. cat kitty_ipsum_1.txt

### 324.1

:smile: You have two `kitty_ipsum` files. Find out what's in them by printing the first one in the terminal with `cat`.

#### HINTS

- Here's an example: `cat <filename>`
- It's the `kitty_ipsum_1.txt` file
- Enter `cat kitty_ipsum_1.txt` in the terminal

## 326. cat kitty_ipsum_2.txt

### 326.1

It's some kitty ipsum. You may enjoy reading it :smile: Look at the second one with `cat` like you did this one.

#### HINTS

- Here's an example: `cat <filename>`
- It's the `kitty_ipsum_2.txt` file
- Enter `cat kitty_ipsum_2.txt` in the terminal

## 330. wc kitty_ipsum_1

### 330.1

You will write a small script to translate both of them into doggy ipsum. For now, you will learn some commands to figure out how. The first one is `wc`. It prints some info about a file. It can take a file as an argument like the `cat` command. Use it to see what it shows you about your `kitty_ipsum_1.txt` file.

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
- Press enter until you have seen the whole manual

## 350. wc -l kitty_ipsum_1

### 350.1

`wc` stands for `word count`. It showed you how many lines were in the file, how many words, and how many bytes. Use the `-l` flag to only output how many lines are in the file. Don't do any redirecting of input or output.

#### HINTS

- Here's an example `<command> <flag> <filename>`
- Enter `wc -l kitty_ipsum_1.txt` in the terminal

## 360. wc -w kitty_ipsum_1

### 360.1

The file has 27 lines. Check how many words are in the file.

#### HINTS

- Don't use any redirection
- Check the manual with `man wc` to find the flag you need
- It's the `-w` flag
- Enter `wc -w kitty_ipsum_1.txt` in the terminal

## 370. wc -m kitty_ipsum_1

### 370.1

332 words are in the `kitty_ipsum_1.txt` file. Lastly, check how many characters it has.

#### HINTS

- Don't use any redirection
- Check the manual with `man wc` to find the flag you need
- It's the `-m` flag
- Enter `wc -w kitty_ipsum_1.txt` in the terminal

## 380. wc kitty_ipsum_1

### 380.1

Use the command without any flags to see if the numbers are the same.

#### HINTS

- Don't use any redirection
- Enter `wc kitty_ipsum_1.txt` in the terminal

## 390. cat kitty_ipsum_1 | wc

### 390.1

That shows the byte count instead of the character count. Some characters must be more than one byte. Use `cat` to pipe the content of the file as the input of the `wc` command to see if the output is the same.

#### HINTS

- Here's an example: `<command_1> | <command_2>`
- The first command should be `cat kitty_ipsum_1.txt`
- The second is `wc`
- Enter `cat kitty_ipsum_1.txt | wc` in the terminal

## 400. wc < kitty_ipsum_1

### 400.1

It looks like the way you give input to a command may affect the output. It only printed the numbers that time and not the filename. Try using redirection as the input with the same file and command to see what that outputs.

#### HINTS

- You can redirect input with `<`
- Here's an example: `<command> < <filename>`
- Enter `wc < kitty_ipsum_1.txt` in the terminal

## 420. echo ~~ kitty_ipsum_1.txt info ~~ > kitty_info

### 420.1

No filename again with fewer spaces that time. You may have to play with certain commands to get the output you are looking for. You are going to create a file that has some meta information about the two kitty ipsum files in it. Use `echo` and redirection to print `~~ kitty_ipsum_1.txt info ~~` to a file named `kitty_info.txt`. Make sure to place the text in quotes.

#### HINTS

- Remember that redirecting output will create the file if it doesn't exist
- You can redirect output with `>`
- Here's an example: `<command> > <filename>`
- Enter `echo "~~ kitty_ipsum_1.txt info ~~" > kitty_info.txt` in the terminal
- Make sure to use quotes around the text

## 430. echo Number of lines >> kitty_info

### 430.1

Open the file so you can keep track of what's in it. Use `echo` and the `-e` flag with the new line character (`\n`) to **append** `Number of lines:` to the `kitty_info.txt` file. Add the new line character at the beginning of the text so there's an empty line. Remember that you can append output to a file with `>>`.

#### HINTS

- Here's an example: `<command> >> <filename>`
- The command you want is `echo -e "\nNumber of lines:"`
- Enter `echo -e "\nNumber of lines:" >> kitty_info.txt`

## 440. cat kitty_ipsum_1 | wc -l >> kitty_info

### 440.1

You should be able to find out how many lines are in the `kitty_ipsum_1.txt` file and add that number to the `kitty_info.txt` file. Use the `cat` command to pipe the content of `kitty_ipsum_1.txt` as input for the `wc` command. Use the flag for getting the number of lines from that input and **append** the number to the `kitty_info.txt` file. **Tip:** enter the command without appending to see if it's working first.

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
- Press enter until you have seen the whole manual

## 510. grep --color meow kitty_ipsum_1

### 510.1

That's a lot of options. Use `grep` to search for the `meow` pattern in the same file, but add that `--color` flag to see if it's a little more helpful.

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

It's showing the line number of each match it found. `grep` can use regular expressions, too. Enter the previous command, but change the pattern to `meow[a-z]*` to see all words that start with `meow`.

#### HINTS

- The last command was `grep --color -n 'meow' kitty_ipsum_1.txt`
- Enter `grep --color -n 'meow[a-z]*' kitty_ipsum_1.txt` in the terminal

## 540. echo -e \nNumber of times meow or meowzer appears: >> kitty_info

### 540.1

Looking at the output, you can see that it matched `meow` and `meowzer`, instead of just `meow`. Use the `echo` command and redirection to append the text `Number of times meow or meowzer appears:`, with a new line in front of it, to the `kitty_info.txt` file.

#### HINTS

- Here's an example: `<command> >> <filename>`
- You want the `echo` command with the `-e` flag and the new line character (`\n`)
- You previously entered `echo -e "\nNumber of characters:" >> kitty_info.txt`
- Enter `echo -e "\nNumber of times meow or meowzer appears:" >> kitty_info.txt` in the terminal

## 550. grep --color meow[a-z] kitty_ipsum_1

### 550.1

So how can you find how many times those two words appear. Use grep to find the `meow[a-z]*` pattern in the file again to see how many times they appear. Add the `--color` flag to the command.

#### HINTS

- Don't use the `-n` flag to show the line numbers.
- Enter `grep --color 'meow[a-z]*' kitty_ipsum_1.txt` in the terminal

## 560. grep -c meow[a-z] kittpy_ipsum_1

### 560.1

It looks like seven, but how can you get a count of that from the command line to append to the info file for the next piece of information? `grep` has a `-c` flag to give you a count. Enter the last command but use that instead of the `--color` flag.

#### HINTS

- The last command was `grep --color 'meow[a-z]*' kitty_ipsum_1.txt`
- Enter `grep -c 'meow[a-z]*' kittpy_ipsum_1.txt` in the terminal

## 570. man grep

### 570.1

That gave you a count of the number lines that the pattern occurred on. Check the manual of grep to see if there's a way to find a count of all the words matched.

#### HINTS

- View a man with `man <command>`
- Enter `man grep` in the terminal
- Press enter until you have seen the whole manual

## 580. grep -o meow[a-z] kitty_1

### 580.1

It doesn't look like that's an option. But there is a `-o` flag that will says it will put the matches on their own lines. Try that one with that command instead of the `-c` flag.

#### HINTS

- The previous command was `grep -c 'meow[a-z]*' kittpy_ipsum_1.txt`
- Replace the `-c` with `-o` in the previous command
- Enter `grep -o 'meow[a-z]*' kitty_ipsum_1.txt` in the terminal

## 590. grep -o meow[a-z] kitty_1 | wc -l

### 590.1

That gave you each match on it's own line. You can use the `wc` command again to get a count of the lines to find out how many matches there are. Pipe the output of the last command into the `wc` command and use the flag for showing the line count.

#### HINTS

- The last command was `grep -o 'meow[a-z]*' kitty_ipsum_1.txt`
- Here's an example: `<command_1> | <command_2>`
- You want to use the `-l` flag with the `wc` command
- Enter `grep -o 'meow[a-z]*' kitty_ipsum_1.txt | wc -l` in the terminal

## 600. grep -o meow[a-z] kitty_1 | wc -l >> kitty_info

### 600.1

Awesome. `wc` counted the lines in the output of the `grep`. That should be the count for how many times those words appear. Enter the same command but append the number to the `kitty_info.txt` file.

#### HINTS

- The last command was `grep -o 'meow[a-z]* kitty_1' | wc -l`
- Append output to a file with `>> <filename>`
- Enter `grep -o 'meow[a-z]* kitty_ipsum_1.txt' | wc -l >> kitty_info.txt` in the terminal

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

There doesn't appear to be a way to just get the line numbers. There's a `sed` command for replacing text that might work. First, some practice. Use `cat` to print the `name.txt` file in the terminal. It should still say `freeCodeCamp`.

#### HINTS

- Enter `cat name.txt` in the terminal
- The file should only have the text `freeCodeCamp`

## 640. sed s/r/2/ name.txt

### 640.1

`sed` can replace text like this: `sed 's/<pattern_to_replace>/<text_to_replace_it_with>/' <filename>`. By default, it won't replace the text in the file. It will output it to `stdout`. Use it to replace `r` with `2` in the `name.txt` file and the output prints to the terminal.

#### HINTS

- Check the example again
- The pattern is `r`, the replacement text is `2`
- Enter `sed 's/r/2/' name.txt` in the terminal

## 650. sed s/free/f233/ name.txt

### 650.1

You can see that it replaced the `r` with a `2` in `freeCodeCamp`. Use it again to replace `free` with `f233` in the same way.

#### HINTS

- Here's the example: `sed 's/<pattern_to_replace>/<text_to_replace_it_with>/' <filename>`
- The pattern is `free`, the replacement text is `f233`
- You previously used `sed 's/r/2/' name.txt`
- Enter `sed 's/free/f233/' name.txt` in the terminal

## 660. sed s/freecodecamp/f233C0d3C@mp/ name.txt

### 660.1

Try it again, replacing `freecodecamp` with `f233C0d3C@mp`.

#### HINTS

- Here's the example: `sed 's/<pattern_to_replace>/<text_to_replace_it_with>/' <filename>`
- The pattern is `freecodecamp`, the replacement text is `f233C0d3C@mp`
- You previously used `sed 's/free/f233/' name.txt`
- Enter `sed 's/freecodecamp/f233C0d3C@mp/' name.txt` in the terminal

## 670. sed s/freecodecamp/f233C0d3C@mp/i name.txt

### 670.1

Nothing was replaced that time. It didn't find the `freecodecamp` text you tried to replace because the case of a few letters didn't match. You can add regex flags after the last `/` in the `sed` argument. A `g`, for `global`, would replace all instances of a matched pattern, or an `i` to ignore the case of the pattern. Enter the same command but add the correct regex flag to ignore the case.

#### HINTS

- Here's an example: `sed 's/<pattern>/<replacement>/<regex_flags>' <filename>`
- The pattern is `freecodecamp`, the replacement text is `f233C0d3C@mp` and the regex flag is `i`
- The last command was `sed 's/freecodecamp/f233C0d3C@mp/' name.txt`
- Enter `sed 's/freecodecamp/f233C0d3C@mp/i' name.txt` in the terminal

## 675. sed s/freecodecamp/f233C0d3C@mp/i < name.txt

### 675.1

It worked that time since it wasn't required to match the case. As with any command, the input can be redirected. Use the same `sed` replacement and file but redirect the **input** this time.

#### HINTS

- The previous command was `sed 's/freecodecamp/f233C0d3C@mp/i' name.txt`
- Here's an example: `<command> < <filename>`
- Enter `sed 's/freecodecamp/f233C0d3C@mp/i' < name.txt` in the terminal

## 680. cat name.txt | sed s/freecodecamp/f233C0d3C@mp/i

### 680.1

The method of input didn't affect the output. Use the `cat` and `pipe` method this time to set the input for the `sed` command, replacing the same text.

#### HINTS

- The previous command was `sed 's/freecodecamp/f233C0d3C@mp/i' < name.txt`
- Here's an example: `cat <filename> | <command>`
- Enter `cat name.txt | sed 's/freecodecamp/f233C0d3C@mp/i'` in the terminal

## 690. grep -n meow[a-z] kitty_1

### 690.1

Back to the task at hand. You want to add the line numbers asked for in the `kitty_info.txt` file. Use `grep` with the flag to show line numbers to find the `meow[a-z]*` pattern in the `kitty_ipsum_1.txt` file again.

#### HINTS

- Enter `man grep` to find the flag you need
- It's the `-n` flag
- Here's an example: `grep -n <pattern> <filename>`
- Enter `grep -n 'meow[a-z]*' kitty_ipsum_1.txt` in the terminal

## 700. grep meow[a-z] kitty_1 -n | sed s/[0-9]/1/

### 700.1

You can use `sed` to each line in that output with just the line numbers. Start by entering the last command and pipe the output into `sed` that replaces `[0-9]` with `1`.

#### HINTS

- A `sed` argument looks like this: `'s/<pattern>/<replacement>/'`
- The `sed` argument is `s/[0-9]/1/`
- The last command was `grep -n 'meow[a-z]*' kitty__ipsum_1.txt`
- Here's an example: `grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed '<pattern>'`
- Enter `grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed 's/[0-9]/1/'` in the terminal

## 710. grep meow[a-z]* kitty_1 -n | sed s/[0-9]+/1/

### 710.1

That matched the first digit it found on each line and replaced it with `1`. Enter the same command but change the matching pattern to `[0-9]+` to match one or more numbers.

#### HINTS

- The previous command was `grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed 's/[0-9]/1/'`
- Change the `sed` argument to `'s/[0-9]+'/1/`
- Enter `grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed 's/[0-9]+/1/'`

## 720. man sed

### 720.1

That didn't replace anything. Check the manual of `sed` quick to see if there's anything to help.

#### HINTS

- View a man with `man <command>`
- Enter `man sed` in the terminal
- Press enter until you have seen the whole manual

## 730. grep meow[a-z]* kitty_1 -n | sed -E s/[0-9]+/1/

### 730.1

Looks like there's a lot of options with `sed` as well. There's a flag to use extended regular expressions. Add it to that previous command that didn't work so it recognizes the `+` in your pattern. The previous command was `grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed 's/[0-9]+/1/'`.

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

That matched all the numbers and replaced them with the same numbers. All you need to do is match everything else on each line and replace it with only the numbers. Add `.*` at the end of the `sed` matching pattern so it matches everything, captures the numbers, and replaces everything with the captured numbers.

#### HINTS

- The previous command was `grep 'meow[a-z]*' kitty_ipsum_1.txt -n | sed -E 's/([0-9]+)/\1/'`
- The new `sed` argument should be `'s/([0-9]+).*/\1/'`
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

Take a look at the file. Hopefully it doesn't look too messy. You can reset a lesson at any time if it doesn't look right, or if you accidentally change something in one of the other files. There's one more group of words to find info on for this file. Use `grep` with the `--color` flag to see all the words that start with `cat` in the same file. Use a similar pattern that you used to find words starting with `meow`.

#### HINTS

- You use `meow[a-z]*` to see all the words that start with `meow`
- Use `cat[a-z]*` as your pattern
- Here's an example: `grep --color '<pattern>' <filename>`
- Enter `grep --color 'cat[a-z]*' kitty_ipsum_1.txt` in the terminal

## 780. echo Number of times cat, cats, or catnip appears: >> kitty_info

### 780.1

There's three variations of words starting with `cat`. Use `echo` with the `-e` flag to append `Number of times cat, cats, or catnip appears:` to the `kitty_info.txt` file. Put a new line at the beginning of the text like the other lines.

#### HINTS

- You previously entered `echo -e "\nLines that they appear on:" >> kitty_info.txt`
- Enter `echo -e "\nNumber of times cat, cats, or catnip appears:" >> kitty_info.txt` in the terminal

## 790. grep cat[a-z]* kitty_1 -o

### 790.1

You will want to find the number of times those words appear again. First, use `grep` with the correct flag to put all the matches of the `cat[a-z]*` pattern on their own line.

#### HINTS

- Here's an example: `grep <flag> '<pattern>' <filename>`
- Make sure to use the `kitty_ipsum_1.txt` file
- You want the `-o` flag
- Enter `grep -o'cat[a-z]*' kitty_1_ipsum_1.txt` in the terminal

## 800. grep cat[a-z]* kitty_1 -o | wc -l

### 800.1

Enter the same command and pipe the output into the command that outputs the count of those lines.

#### HINTS

- You want to pipe the output of the previous command into the `wc` command
- The previous command was `grep -o'cat[a-z]*' kitty_1_ipsum_1.txt`
- Use the correct flag with `wc` to output the line count of the grep output
- It's the `-l` flag
- Enter `grep -o'cat[a-z]*' kitty_1_ipsum_1.txt | wc -l`

## 810. grep cat[a-z]* kitty_1 -o | wc -l >> kitty_info

### 810.1

That's a count of how many times `cat`, `cats`, or `catnip` appears in the file. Enter the same command and append the count to the `kitty_info.txt` file.

#### HINTS

- The previous command was `grep -o'cat[a-z]*' kitty_1_ipsum_1.txt | wc -l`
- Append output like this: `>> <filename>`
- Enter `grep 'cat[a-z]*' kitty_1 -o | wc -l >> kitty_info.txt` in the terminal

## 820. echo -e Lines that they appear on: >> kitty_info

### 820.1

Next, use `echo` to add the text `Lines that they appear on:` to the `kitty_info.txt` file again. Place a new line in front of the text like before.

#### HINTS

- Here's an example: `<command> >> <filename>`
- You want the `echo` command with the `-e` flag and the new line character (`\n`)
- You previously entered `echo -e "\nNumber of times cat, cats, or catnip appears:" >> kitty_info.txt`
- Enter `echo -e "\nLines that they appear on:" >> kitty_info.txt` in the terminal

## 830. grep cat[a-z]* kitty_1 -n

### 830.1

The process to add the lines to the file will be the same as you did before. Start by using `grep` to match the `cat` words in the file and showing the line numbers with the output.

#### HINTS

- Here's an example: `grep <flag> '<pattern>' <filename>`
- Make sure to use the `cat[a-z]*` pattern again
- Use the `-n` flag to show the line numbers
- Enter `grep -n 'cat[a-z]*' kitty_ipsum_1.txt` in the terminal

## 840. grep cat[a-z]* kitty_1 -n | sed -E s/([0-9]+).*/\1/

### 840.1

That shows you the line numbers and text. You will have to use `sed` again to extract only the line numbers. Pipe the output of the last command into `sed` to do that. As a reminder, the `sed` pattern was `'s/([0-9]+).*/\1/'`.

#### HINTS

- The last command was `grep -n 'cat[a-z]*' kitty_ipsum_1.txt`
- Don't forget the `sed` flag for using extended regular expressions
- It's the `-E` flag
- You previously used `grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed -E 's/([0-9]+).*/\1/'`
- Enter `grep -n 'cat[a-z]*' kitty_ipsum_1.txt | sed -E 's/([0-9]+).*/\1/'` in the terminal

## 850. previous with >> kitty_info

### 850.1

Awesome. Enter the last command and append the line numbers to the `kitty_info.txt` file.

#### HINTS

- The previous command was `grep -n 'cat[a-z]*' kitty_ipsum_1.txt | sed -E 's/([0-9]+).*/\1/'`
- Append to a file by adding `>> <filename>` at the end of a command
- You previously used `grep -n 'meow[a-z]*' kitty_ipsum_1.txt | sed -E 's/([0-9]+).*/\1/' >> kitty_info.txt`
- Enter `grep -n 'cat[a-z]*' kitty_ipsum_1.txt | sed -E 's/([0-9]+).*/\1/' >> kitty_info.txt` in the terminal

## 860. echo -e \n\n~~ kitty_ispsum_2.txt info ~~ >> kitty_info

### 860.1

Hopefully your info file is looking good. Next, you want to do the same thing for the `kitty_ipsum_2.txt` file. Using `echo` in the terminal, append `~~ kitty_ipsum_2.txt info ~~` to the `kitty_info.txt` file. Put **two** new lines in front of the text this time.

#### HINTS

- You want the `echo` command with the `-e` flag and the new line character (`\n`) twice
- Here's an example: `echo -e "\n\n<text>" >> <filename>`
- You previously entered `echo -e "\nLines that they appear on:" >> kitty_info.txt`
- Enter `echo -e "\n\n~~ kitty_ipsum_2.txt info ~~" >> kitty_info.txt` in the terminal

## 870. echo -e \nNumber of lines: >> kitty_info

### 870.1

The first piece of info you want to know is the number of lines in the file. Use the terminal to append `Number of lines:` to the file with a new line in front.

#### HINTS

- You want the `echo` command with the `-e` flag and the new line character (`\n`)
- Here's an example: `echo -e "\n<text>" >> <filename>`
- You previously entered `echo -e "\nLines that they appear on:" >> kitty_info.txt`
- Enter `echo "\nNumber of lines:" >> kitty_info.txt` in the terminal

## 880. cat kitty_2 | wc -l >> kitty_info

### 880.1

Use `cat` with the pipe method to append the info to the `kitty_info.txt` file that it is asking for.

#### HINTS

- Enter the commands one at a time to see the output first
- Here's an example: `cat <filename> | <command> >> <filename>`
- You want to `cat kitty_ipsum_2.txt`
- And pipe the output of that into the `wc` command
- Which uses the `-l` flag to get the number of lines in the file
- And appends the number to the file like this: `>> kitty_info.txt`
- You previously used `cat kitty_ipsum_1.txt | wc -w >> kitty_info.txt`
- Enter `cat kitty_ipsum_2.txt | wc -l >> kitty_info.txt` in the terminal

## 890. echo -e \nNumber of words: >> kitty_info

### 890.1

Nice job! Next, use the terminal to append `Number of words:` to the `kitty_info.txt` file. Put a new line in front of the text again.

#### HINTS

- You want the `echo` command with the `-e` flag and the new line character (`\n`)
- Here's an example: `echo -e "\n<text>" >> <filename>`
- You previously entered `echo "\nNumber of lines:" >> kitty_info.txt`
- Enter `echo -e "\nNumber of words:" >> kitty_info`

## 900. wc -w < kitty_ipsum_2.txt >> kitty_info

### 900.1

Append the suggested info the `kitty_info.txt` file. Use redirection instead of the pipe method for the input this time.

#### HINTS

- Enter the commands one at a time to see the output first
- Here's an example: `<command> < <input_filename> >> <output_filename>`
- You want to use `kitty_ipsum_2.txt` for the input of the `wc` command
- With the `-w` flag to get the number of words from the input
- And output the numbers of words to the file `>> kitty_info.txt`
- You previously used `wc -m < kitty_ipsum_1.txt >> kitty_info.txt`
- Enter `wc -w < kitty_ipsum_2 >> kitty_info.txt` in the terminal

## 910. echo -e \nNumber of characters: >> kitty_info

### 910.1

Next, is the character count. Append `Number of characters:` to the file with a new line in front of the text. Use the method you have been using.

#### HINTS

- You want the `echo` command with the `-e` flag and the new line character (`\n`)
- Here's an example: `echo -e "\n<text>" >> <filename>`
- You previously entered `echo -e "\nNumber of words:" >> kitty_info`
- Enter `echo -e "\nNumber of characters:" >> kitty_info.txt` in the terminal

## 920. wc -m < kitty_ipsum_2.txt >> kitty_info

### 920.1

Using the pipe or input redirection method, append the character count of `kitty_ipsum_2.txt` to the `kitty_info.txt` file.

#### HINTS

- Enter the commands one at a time to see the output first
- You will want to use the `wc` command with the `-m` flag
- Here's an example: `<command> < <input_filename> >> <output_filename>`
- You previously used `wc -w < kitty_ipsum_2 >> kitty_info.txt`
- Enter `wc -m < kitty_ipsum_2.txt >> kitty_info.txt` in the terminal

## 925. grep --color meow[a-z]* kitty_2

### 925.1

Excellent. Next, use `grep` to see how many variations of `meow` there are in `kitty_ipsum_2.txt`. Use the same pattern you used before and add the flag to show colors so it's easier to see.

#### HINTS

- Here's an example `grep <flag> '<pattern>' <filename>`
- The pattern you want is `meow[a-z]*`
- Be sure to use the `--color` flag
- Enter `grep --color meow[a-z]* kitty_ipsum_2.txt` in the terminal

## 930. echo -e \nNumber of times meow or meowzer appears: >> kitty_info

### 930.1

It's the same variations as the other file. Append `Number of times meow or meowzer appears:` to the `kitty_info.txt` file with a new line in front of it like before.

#### HINTS

- You want the `echo` command with the `-e` flag and the new line character (`\n`)
- Here's an example: `echo -e "\n<text>" >> <filename>`
- You previously entered `echo -e "\nNumber of characters:" >> kitty_info.txt`
- Enter `echo -e "\nNumber of times meow or meowzer appears:" >> kitty_info.txt` in the terminal

## 940. grep -o 'meow[a-z]*' kitty_ipsum_2.txt | wc -l >> kitty_info

### 940.1

Use `grep` and `wc` in the terminal to append the suggested number to the `kitty_info.txt` file.

#### HINTS

- Enter the commands one at a time to see the output first
- Here's an example: `<command_1> | <command_2> >> kitty_info.txt`
- You want to use `grep` to get the matches for `meow[a-z]*`
- Add the flag to put the matched words on their own line
- It's the `-o` flag
- Pipe the `grep` results into the `wc` command
- Add the `-l` flag to the `wc` to count the lines
- Append the results of that to the file with `>> kitty_info.txt`
- You previously used `grep -o 'cat[a-z]* kitty_ipsum_1.txt' | wc -l >> kitty_info.txt`
- Enter `grep -o 'meow[a-z]*' kitty_ipsum_2.txt | wc -l >> kitty_info.txt` in the terminal

## 950. echo -e \nLines that they appear on: >> kitty_info

### 950.1

:sunglasses: Next, use the terminal to append `Lines that they appear on:` to the `kitty_info.txt` file with a new line in front of the text.

#### HINTS

- Use the `echo` command with the `-e` flag and the new line character (`\n`)
- Here's an example: `echo -e "\n<text>" >> <filename>`
- You previously entered `echo -e "\nNumber of times meow or meowzer appears:" >> kitty_info.txt`
- Enter `echo -e "\nLines that they appear on:" >> kitty_info.txt` in the terminal

## 960. grep -n meow[a-z]* kitty_2 | sed -E s/([0-9]+).*/\1/ >> kitty_info

### 960.1

Use `grep` and `sed` in the terminal to append the suggested line numbers to the `kitty_info.txt` file.

#### HINTS

- Here's an example: `<command_1> | <command_2> >> kitty_info.txt`
- Enter the commands one at a time to see the output first
- You want to use `grep` to get the matches for `meow[a-z]*`
- Add the `-n` flag to `grep` to show the line numbers in front of the matches
- Pipe the `grep` results into the `sed` command
- The `sed` command should replace `([0-9]+).*'` with `\1` to get the line numbers
- Don't forget the `-E` flag with `sed` to allow extended regular expressions
- You `sed` arguments should be `-E 's/([0-9]+).*/\1/'`
- Append the results to the file wiht `>> kitty_info.txt`
- You previously used `grep -n 'cat[a-z]*' kitty_ipsum_1.txt | sed -E 's/([0-9]+).*/\1/' >> kitty_info.txt` in the terminal
- Enter `grep -n 'meow[a-z]*' kitty_ipsum_2.txt | sed -E 's/([0-9]+).*/\1/' >> kitty_info.txt` in the terminal

## 965. grep --color cat[a-z]* kitty_2

### 965.1

:sunglasses: :sunglasses: Use `grep` to see how many variations of `cat` there are in `kitty_ipsum_2.txt`. Use the same pattern you used before and include the flag to show colors so it's easier to see.

#### HINTS

- Here's an example `grep <flag> '<pattern>' <filename>`
- The pattern you want is `cat[a-z]*`
- Be sure to use the `--color` flag
- Enter `grep --color cat[a-z]* kitty_ipsum_2.txt` in the terminal

## 970. echo -e \nNumber of times cat, cats, or catnip appears: >> kitty_info

### 970.1

Same variations as the other kitty ipsum file. Append `Number of times cat, cats, or catnip appears:` to the `kitty_info.txt` file. Use the method you have been using.

#### HINTS

- Don't forget the new line in front of the text
- Use the `echo` command with the `-e` flag and the new line character (`\n`)
- Here's an example: `echo -e "\n<text>" >> <filename>`
- You previously entered `echo -e "\nLines that they appear on:" >> kitty_info.txt`
- Enter `echo -e "\nNumber of times cat, cats, or catnip appears:" >> kitty_info.txt` in the terminal

## 980. grep -o 'cat[a-z]*' kitty_2 | wc -l >> kitty_info

### 980.1

Use `grep` and `wc` in the terminal to append the suggested info to `kitty_info.txt`

#### HINTS

- Enter the commands one at a time to see the output first
- Here's an example: `<command_1> | <command_2> >> kitty_info.txt`
- You want to use `grep` to get the matches for `cat[a-z]*`
- Add the `-o` flag to `grep` to put each match on it's own line
- Pipe the `grep` results into the `wc` command
- Add the `-l` flag to the `wc` to count the lines
- Append the results of that to the file with `>> kitty_info.txt`
- You previously used `grep -o 'meow[a-z]* kitty_ipsum_1.txt' | wc -l >> kitty_info.txt`
- Enter `grep -o 'cat[a-z]*' kitty_ipsum_2.txt | wc -l >> kitty_info.txt` in the terminal

## 990. echo -e \nLines that they appear on: >> kitty_info

### 990.1

:sunglasses: :sunglasses: :sunglasses: One more. Append `Lines that they appear on:` to it like you did for the others.

#### HINTS

- Don't forget the new line
- Use the `echo` command with the `-e` flag and the new line character (`\n`)
- Here's an example: `echo -e "\n<text>" >> <filename>`
- You previously entered `echo -e "\nNumber of times cat, cats, or catnip appears:" >> kitty_info.txt`
- Enter `echo -e "\nLines that they appear on:" >> kitty_info.txt` in the terminal

## 1000. grep -n cat[a-z]* kitty_2 | sed -E >> kitty_info

### 1000.1

Use `grep` and `sed` in the terminal to append the suggested numbers to the `kitty_info.txt` file.

#### HINTS

- Enter the commands one at a time to see the output first
- Here's an example: `<command_1> | <command_2> >> kitty_info.txt`
- You want to use `grep` to get the matches for `cat[a-z]*`
- Add the `-n` flag to `grep` to show the line numbers in front of the matches
- Pipe the `grep` results into the `sed` command
- The `sed` command should replace `([0-9]+).*'` with `\1` to get the line numbers
- Don't forget the `-E` flag with `sed` to allow extended regular expressions
- You `sed` arguments should be `-E 's/([0-9]+).*/\1/'`
- Append the results to the file wiht `>> kitty_info.txt`
- You previously used `grep -n 'meow[a-z]*' kitty_ipsum_2.txt | sed -E 's/([0-9]+).*/\1/' >> kitty_info.txt` in the terminal
- Enter `grep -n 'cat[a-z]*' kitty_ipsum_2.txt | sed -E 's/([0-9]+).*/\1/' >> kitty_info.txt` in the terminal

## 1010. touch translate.sh

### 1010.1

:sunglasses: :sunglasses: :sunglasses: :sunglasses: The `kitty_info` file is done and it has some information about the two ipsum files. Next, you will create a small script to translate both them into doggy ipsum. It will be as simple as replacing all the cat references with similar words for dogs. In the terminal, use `touch` to create `translate.sh`.

#### HINTS

- Here's an example: `touch <filename>`
- Enter `touch translate.sh` in the terminal
- Make sure you are in the `project` folder first

## 1020. chmod +x ./translate.sh

### 1020.1

Give your new script executable permissions so you can run it in the terminal.

#### HINTS

- Here's an example: `chmod +x <filename>`
- Enter `chmod +x translate.sh` in the terminal

## 1030. Add shebang

### 1030.1

Add a shebang to the script that uses `bash` like you did for the other script you made.

#### HINTS

- The shebang for bash is `#!/bin/bash`
- Add the suggestion at the top of the `translate.sh` file
- Add `#!/bin/bash` at the top of the `translate.sh` file

## 1040. Add cat $1

### 1040.1

The script will take a file as input that can be passed as an argument or read from `stdin`. Below the shebang, use `cat` to print the content of the first argument passed to the script.

#### HINTS

- Here's an example: `cat <first_argument>`
- You can access an arguement with `$<argument_number>`
- Access the arguement with `$1`
- Add `cat $1` below the shebang in your `translate.sh` file

## 1050. ./translate.sh kitty_1

### 1050.1

Run the script and use the first kitty ipsum file as an argument to see if it's working.

#### HINTS

- Here's an example: `<command_to_run> <argument>`
- Enter `./translate.sh kitty_ipsum_1.txt` in the terminal

## 1060. ./translate.sh < kitty_1

### 1060.1

Try the same command using redirection to print the file.

#### HINTS

- Here's an example: `<command> < <filename>`
- Redirect the `kitty_ipsum_1.txt` file as input for your script
- Enter `./translate.sh < kitty_ipsum_1.txt` in the terminal

## 1070. cat kitty_1 | ./translate.sh

### 1070.1

Looks like that is working. Try the `cat` and pipe method.

#### HINTS

- Here's and example `cat <filename> | <command>`
- Use `cat` to set the content of `kitty_ipsum_1.txt` as input for your script
- Enter `cat kitty_ipsum_1.txt | ./translate.sh` in the terminal

## 1080. Add | sed s/catnip/dogchow/

### 1080.1

Using any of those three methods as input is working. Time to start replacing some of the text with doggy ipsum. In your script file, pipe the input into a `sed` that replaces `catnip` with `dogchow`.

#### HINTS

- Here's an example: `cat $1 | sed 's/<pattern>/<replacement>/'`
- The `sed` argument should be `s/catnip/dogchow/`
- The `translate.sh` file should look like this:
```sh
#!/bin/bash

cat $1 | sed 's/catnip/dogchow/'
```

## 1090. ./translate kitty_1

### 1090.1

Run the script passing the first kitty ipsum file as a argument to see if it's working.

#### HINTS

- Here's an example: `<command> <argument>`
- Use the `kitty_ipsum_1.txt` file as the argument
- Enter `./translate.sh kitty_ipsum_1.txt` in the terminal

## 1100. ./translate kitty_1 | grep --color dogchow

### 1100.1

If you look, you can find `dogchow` in there so it's probably working. To make sure pipe the results of that into a `grep` command that searches for `dogchow`. Output the results in color.

#### HINTS

- The previous command was `./translate.sh kitty_ipsum_1.txt`
- Pipe the results of the previous command into `grep` so it searches for `dogchow`
- Don't forget the `--color` flag to show the results in color
- Here's an example: `./translate kitty_ipsum_1.txt | grep <flag> '<pattern>'`
- Enter `./translate kitty_ipsum_1.txt | grep --color 'dogchow'` in the terminal

## 1110. ./translate kitty_1 | grep --color catnip

### 1110.1

It's showing three places `catnip` was replaced with `dogchow`. To make sure you got them all, enter the previous command and search for `catnip` instead.

#### HINTS

- The previous command was `./translate kitty_ipsum_1.txt | grep --color 'dogchow'`
- Replace `dogchow` with `catnip` in the previous command
- Enter `./translate kitty_ipsum_1.txt | grep --color 'catnip'` in the terminal

## 1120. Add s/cat/dog/

### 1120.1

It didn't output anything, so it must be replacing all the instances of `catnip`. You can replace many patterns using `sed` like this: `sed 's/<pattern_1>/<replacement_1>/; s/<pattern_2>/<replacement_2>/'`. Note that you need the semi-colon between the two replacement patterns and they both need to be wrapped in the quotes. In your script, add another pattern to the `sed` command that replaces `cat` with `dog`.

#### HINTS

- The code looks like this: `s/cat/dog/`
- The `translate.sh` file should look like this:
```sh
#!/bin/bash

cat $1 | sed 's/catnip/dogchow/; s/cat/dog/'
```

## 1130. ./translate.sh kitty_1 | grep --color dog[a-z]

### 1130.1

Now, it should replace `catnip` with `dogchow` and `cat` with `dog`. Use the script the translate the first ipsum file again. Search the results with `grep` for any words that start with `dog`. Part of that search pattern should be `[a-z]*`. Make sure to show the results in color.

#### HINTS

- You previously entered `./translate kitty_ipsum_1.txt | grep --color 'catnip'`
- The `grep` pattern you want is `dog[a-z]*`
- Enter `./translate.sh kitty_ipsum_1.txt | grep --color 'dog[a-z]*'` in the terminal

## 1135. ./translate.sh kitty_1 | grep --color cat[a-z]

### 1135.1

As expected, it replaced instances of `cat` with `dog`. Enter the same command, but search for anything starting with `cat` to make sure it replaced them all.

#### HINTS

- The previous command was `./translate.sh kitty_ipsum_1.txt | grep --color 'dog[a-z]*'`
- Replace `dog[a-z]*` with `cat[a-z]*` in the previous command
- Enter `./translate.sh kitty_ipsum_1.txt | grep --color 'cat[a-z]*'` in the terminal

## 1140. Add s/meow/woof/

### 1140.1

It didn't find any so it must be replacing them all. You added two patterns as part of the `sed` in your script. Add a third that replaces all `meow` words with `woof`.

#### HINTS

- You can add another pattern to replace like before. Add a semi-colon and another pattern in the quotes of the `sed`
- Here's an example: `sed 's///; s///; s///'`
- The third pattern should be `s/meow/woof/`
- The `translate.sh` file should look like this:
```sh
#!/bin/bash

cat $1 | sed -E 's/catnip/dogchow/; s/cat/dog/; s/meow/woof/'
```

## 1150. ./translate.sh kitty_1 | grep --color dog[a-z]woof[a-z]

### 1150.1

Using your script, translate the first ipsum file again. Check the results with `grep` for words that start with `dog` or `woof`. Here's an example of the search pattern you want: `grep '<dog_words>|<woof_words>'`. To view "dog words", you would use `dog[a-z]*`. Be sure to view the result in color.

#### HINTS

- You previously entered `./translate.sh kitty_ipsum_1.txt | grep --color 'cat[a-z]*'`
- You want to find "dog" words with `dog[a-z]*` and "woof" words with `woof[a-z]*`
- The search pattern you should use is `'dog[a-z]*|woof[a-z]*'`
- Enter `./translate.sh kitty_ipsum_1.txt | grep --color 'dog[a-z]*|woof[a-z]*'` in the terminal

## 1160. ./translate.sh kitty_1 | grep --color -E dog[a-z]woof[a-z]

### 1160.1

That didn't work. Enter the same command, but add the flag to use extended regular expressions to the `grep` search so it recognizes the `|`.

#### HINTS

- The last command was `./translate.sh kitty_ipsum_1.txt | grep --color 'dog[a-z]*|woof[a-z]*'`
- Find the flag you want in the `grep` manual
- View the manual with `man grep`
- It's the `-E` flag
- Enter `./translate.sh kitty_ipsum_1.txt | grep --color -E 'dog[a-z]*|woof[a-z]*'` in the terminal

## 1170. Add g regex flag

### 1170.1

If you look closely, you can see that the `meow` part of `meowzer` on that one line didn't get replaced with `woof`. `grep` only matched the first instance of `meow` it found on that line. Add the "global" regex flag to all three patterns of the `sed` command in your script so it will replace all instances of any of the words.

#### HINTS

- Here's an example of one pattern: `s/<pattern>/<replacement>/<regex_flags>`
- It's the `g` flag
- Your `translate.sh` file should look like this:
```sh
#!/bin/bash

cat $1 | sed -E 's/catnip/dogchow/g; s/cat/dog/g; s/meow/woof/g'
```

## 1180. ./translate.sh kitty_1 | grep --color -E dog[a-z]woof[a-z]

### 1180.1

Enter the same command to translate the first ipsum file and see the matches of all words starting with `dog` or `woof` to see if that worked.

#### HINTS

- You can find previously entered commands using the arrow on the keyboard while the terminal is focused
- Enter `./translate.sh kitty_ipsum_1.txt | grep --color -E 'dog[a-z]*|woof[a-z]*'` in the terminal

## 1190. Add -E s/meow|meowzer/woof/

### 1190.1

It worked, but `woofzer` doesn't sound quite right. Change your `sed` pattern that matched `meow` to match `meow|meowzer`. Add the flag to use extended regular expressions to the `sed` command so it recognizes the `|`.

#### HINTS

- The last `sed` pattern in you scrip should be `s/meow|meowzer/woof/`
- And you should add the `-E` flag to the `sed` command
- Your `translate.sh` file should look like this:
```sh
#!/bin/bash

cat $1 | sed -E 's/catnip/dogchow/g; s/cat/dog/g; s/meow|meowzer/woof/g'
```

## 1200. ./translate.sh kitty_1 | grep --color -E dog[a-z]woof[a-z]

### 1200.1

Now it should replace either of those two words with `woof`. Check it again with that command you entered before that searches for `dog` or `woof` words.

#### HINTS

- You can use the up arrow in the terminal to find previously entered commands
- Enter `./translate.sh kitty_ipsum_1.txt | grep --color -E 'dog[a-z]*|woof[a-z]*'` in the terminal

## 1210. ./translate.sh kitty_1 | grep --color -E meow[a-z]cat[a-z]

### 1210.1

It replaced `meowzer` that time. To be sure it replaced all the words in the file, enter the same command but check for `meow` or `cat` words in the same way.

#### HINTS

- The last command was `./translate.sh kitty_ipsum_1.txt | grep --color -E 'dog[a-z]*|woof[a-z]*'`
- Replace the matching pattern with `meow[a-z]*|cat[a-z]*`
- Enter `./translate.sh kitty_ipsum_1.txt | grep --color -E 'meow[a-z]*|cat[a-z]*'` in the terminal

## 1220. ./translate.sh kitty_2 | grep --color -E meow[a-z]cat[a-z]

### 1220.1

No results means it didn't find any matches for `cat` or `meow` words after being translated. Check the second kitty ipsum file for the same pattern to make sure it's replacing all those words.

#### HINTS

- You can find previously entered commands using the arrow on the keyboard while the terminal is focused
- The last command was `./translate.sh kitty_ipsum_1.txt | grep --color -E 'meow[a-z]*|cat[a-z]*'`
- Change the last command to use the `kitty_ipsum_2.txt` file
- Enter `./translate.sh kitty_ipsum_2.txt | grep --color -E 'meow[a-z]*|cat[a-z]*'` in the terminal

## 1230. ./translate.sh kitty_1 > doggy_1

### 1230.1

Okay, your script is finished. Translate the `kitty_ipsum_1.txt` file and put the output into a new `doggy_ipsum_1.txt` file.

#### HINTS

- Redirect the `stdout` of translating `kitty_ipsum_1.txt` to `doggy_ipsum_1.txt`
- Here's an example: `<translate_command> <input_filename> > <output_filename>`
- Enter `./translate.sh kitty_ipsum_1.txt > doggy_ipsum_1.txt` in the terminal

## 1240. cat doggy_1

### 1240.1

Use `cat` to print the new file to the terminal.

#### HINTS

- Here's an example: `cat <filename>`
- Enter `cat doggy_ipsum_1.txt` in the terminal

## 1250. diff kitty_1 doggy_1

### 1250.1

It looks good :thumbsup: `diff` is a command to view the difference between two files. You can use it like this: `diff <file_1> <file_2>`. Use it to view the difference between the `kitty_ipsum_1` and `doggy_ipsum_1` files.

#### HINTS

- Enter `diff kitty_ipsum_1.txt doggy_ipsum_1.txt` in the terminal

## 1260. man diff

### 1260.1

It may look a little cryptic, but it's showing the lines that don't match in the two files. Check the manual of `diff` to see if there's any way to make it prettier.

#### HINTS

- View the manual of a command with `man`
- Here's an example: `man <command>`
- Enter `man diff` in the terminal
- Press enter until you have seen the whole manual

## 1270. diff --color kitty_1 doggy_1

### 1270.1

Use the flag to show the diff of the same two files in color.

#### HINTS

- You previously entered `diff kitty_ipsum_1.txt doggy_ipsum_1.txt`
- The flag you want is `--color`
- Enter `diff --color kitty_ipsum_1.txt doggy_ipsum_1.txt` in the terminal

## 1280. ./translate.sh kitty_2 > doggy_2

### 1280.1

That's better. The red lines are lines that aren't in the second file, and the green lines are what they were replaced with. The line numbers that were changed are above each section. Translate your second kitty ipsum file and redirect the output into `doggy_ipsum_2.txt`.

#### HINTS

- You previously entered `./translate.sh kitty_ipsum_1.txt > doggy_ipsum_1.txt`
- Enter `./translate.sh kitty_ipsum_2.txt > doggy_ipsum_2.txt` in the terminal

## 1290. cat doggy_2

### 1290.1

View the content of your new file with `cat`

#### HINTS

- Here's an example: `cat <filename>`
- Enter `cat doggy_ipsum_2.txt` in the terminal

## 1300. diff --color kitty_2 doggy_2

### 1300.1

Lastly, view the `diff` of the two files in color again.

#### HINTS

- Here's the example again: `diff <file_1> <file_2>`
- Don't forget the flag to show the colors
- It's the `--color` flag
- You previosly entered `diff --color kitty_ipsum_1.txt doggy_ipsum_1.txt`
- Enter `diff --color kitty_ipsum_2.txt doggy_ipsum_2.txt` in the terminal
