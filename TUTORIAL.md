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

echo hello bash > stdout.txt

#### HINTS

- Hint

## 30. echo hello bash >> stdout.txt

### 30.1

That took the output of the command and put it into `stdout.txt`. You should take a look at the file. Nothing was printed to the terminal. It’s output was `redirected`. A single `>` will create or overwrite the file. Use the same command with `>>` to append to the file.

echo hello bash >> stdout.txt

#### HINTS

- Hint

## 40. echo hello bash > stdout.txt

### 40.1

Take a look at the file, now it has the same thing in it twice. Use the command with one `>` again to overwrite the file.

echo hello bash > stdout.txt

#### HINTS

- Hint

## 50. > stdout.txt

### 50.1

Take a look at the file. As expected, it was overwritten. Enter `> stout.txt` in the terminal to redirect nothing into the file. Effectively, emptying it.

`> stdout.txt`

#### HINTS

- Hint

## 60. bad_command

### 60.1

Next, enter `bad_command` in the terminal. You will get an error.

bad_command

#### HINTS

- Hint

## 70. bad_command > stderr.txt

### 70.1

Enter the same command, but try to redirect the output to `stderr.txt` using `>`.

bad_command > stderr.txt

#### HINTS

- Hint

## 80. bad_command 2> stderr.txt

### 80.1

There’s two types of output, `stdout` (standard out) for when a command is successful, and `stderr` (standard error) for when it’s not. Both of these will print to the terminal by default. `bad_command` was not a valid command, so it printed to `stderr`. You can redirect `stderr` with `2>`. Enter the same command but redirect the error to `stderr.txt`

bad_command 2> stderr.txt

#### HINTS

- Hint

## 90. echo hello bash 1> stdout.txt

### 90.1

Now the error was redirected to the file and nothing printed in the terminal. You used `2>` to redirect `stderr`. Similarily, you can use `1>` to redirect `stdout`. Enter `echo hello bash` again and use it to redirect `stdout` to the `stdout.txt` file.

echo hello bash 1> stdout.txt

#### HINTS

- Hint

## 100. read NAME

### 100.1

`stdout` and `stderr` are for output. `stdin` (standard in) is the third thing created when you run a command and is for input. The default is the keyboard. Enter `read NAME` in the terminal to see a command that uses `stdin`.

read NAME

#### HINTS

- Hint

## 110. Enter your name

### 110.1

The `read` command is waiting for input from the keyboard. Type your name and press enter. 

Enter your name

#### HINTS

- Hint

## 120. echo $NAME

### 120.1

Use echo to print the `NAME` variable you just created and redirect the `stdout` to `stdout.txt`.

echo $NAME

#### HINTS

- Hint

## 140. echo freecodecamp > name.txt

### 140.1

add `freecodecamp` and an empty line to the file

echo freecodecamp > name.txt || maybe just change the file manually

#### HINTS

- Hint

## 150. read NAME < name.txt

### 150.1

read NAME < name.txt

#### HINTS

- Hint

## 160. echo $NAME

### 160.1

echo $NAME

#### HINTS

- Hint

## 170. echo your_name | read NAME

### 170.1

echo <your_name> | read NAME

#### HINTS

- Hint

## 175. echo $NAME

### 175.1

echo $NAME

#### HINTS

- Hint

## 178. cat

### 178.1

cat

#### HINTS

- Hint

## 180. cat

### 180.1

end cat

#### HINTS

- Hint

## 190. cat < name.txt

### 190.1

cat < name.txt

#### HINTS

- Hint

## 200. echo your_name | cat

### 200.1

echo <your_name> | cat

#### HINTS

- Hint

## 210. touch script.sh

### 210.1

touch script.sh

#### HINTS

- Hint

## 220. chmod +x script.sh

### 220.1

chmod +x script.sh

#### HINTS

- Hint

## 230. Add shebang

### 230.1

Add shebang

#### HINTS

- Hint

## 240. Add read NAME

### 240.1

Add read NAME

#### HINTS

- Hint

## 250. Add echo Hello $NAME

### 250.1

Add echo Hello $NAME

#### HINTS

- Hint

## 260. Add bad_command

### 260.1

Add bad_command

#### HINTS

- Hint

## 270. echo your_name | ./script

### 270.1

echo <your_name> | ./script

#### HINTS

- Hint

## 280. echo your_name | ./script 2> stderr

### 280.1

echo your_name | ./script 2> stderr

#### HINTS

- Hint

## 290. echo your_name | ./script 2> stderr 1> stdout

### 290.1

echo your_name | ./script 2> stderr 1> stdout

#### HINTS

- Hint

## 300. ./script < name

### 300.1

./script < name

#### HINTS

- Hint

## 310. ./script < name 2> stderr

### 310.1

./script < name 2> stderr

#### HINTS

- Hint

## 320. ./script < name 2> stderr 1> stdout

### 320.1

./script < name 2> stderr 1> stdout

#### HINTS

- Hint

## 330. wc kitty_ipsum_1

### 330.1

wc kitty_ipsum_1

#### HINTS

- Hint

## 340. man wc

### 340.1

man wc

#### HINTS

- Hint

## 350. wc -l kitty_ipsum_1

### 350.1

wc -l kitt_ipsum_1

#### HINTS

- Hint

## 360. wc -w kitty_ipsum_1

### 360.1

wc -w kitty_ipsum_1

#### HINTS

- Hint

## 370. wc -m kitty_ipsum_1

### 370.1

wc -m kitty_ipsum_1

#### HINTS

- Hint

## 380. wc kitty_ipsum_1

### 380.1

wc kitty_ipsum_1

#### HINTS

- Hint

## 390. cat kitty_ipsum_1 | wc

### 390.1

cat kitty_ipsum_1 | wc

#### HINTS

- Hint

## 400. wc < kitty_ipsum_1

### 400.1

wc < kitty_ipsum_1

#### HINTS

- Hint

## 420. echo ~~ kitty_ispsum_1.txt info ~~ > kitty_ipsum_info

### 420.1

echo "~~ kitty_ispsum_1.txt info ~~" > kitty_ipsum_info.txt

#### HINTS

- Hint

## 430. echo Number of lines >> kitty_ipsum_info

### 430.1

echo -e "\nNumber of lines:" >> kitty_ipsum_info.txt

#### HINTS

- Hint

## 440. cat kitty_ipsum_1 | wc -l >> kitty_ipsum_info

### 440.1

cat kitty_ipsum_1.txt | wc -l >> kitty_ipsum_info.txt

#### HINTS

- Hint

## 450. echo -e Number of words: >> kitty_ipsum_info

### 450.1

echo -e "\nNumber of words:" >> kitty_ipsum_info.txt

#### HINTS

- Hint

## 460. wc -w < kitty_ipsum_1 >> kitty_ipsum_info

### 460.1

wc -w < kitty_ipsum_1 >> kitty_ipsum_info

#### HINTS

- Hint

## 470. echo -e Number of characters: >> kitty_ipsum_info

### 470.1

echo -e Number of characters: >> kitty_ipsum_info

#### HINTS

- Hint

## 480. cat kitty_ipsum_1 | wc -m >> kitty_ipsum_info

### 480.1

use the method of your choice

cat kitty_ipsum_1 | wc -m >> kitty_ipsum_info

#### HINTS

- Hint

## 490. grep meow kitty_ipsum_1

### 490.1

grep meow kitty_ipsum_1.txt

#### HINTS

- Hint

## 500. man grep

### 500.1

It showed you all the lines that contain `meow` somewhere in them - but it’s a little messy. View the manual of `grep`

man grep

#### HINTS

- Hint

## 510. grep --color meow kitty_ipsum_1

### 510.1

grep --color meow kitty_ipsum_1.txt

#### HINTS

- Hint

## 520. grep --color -n cat kitty_ipsum_1

### 520.1

That’s better. Add the flag to show all the line numbers with the command.

grep --color -n meow kitty_ipsum_1.txt

#### HINTS

- Hint

## 530. grep --color -n meow[a-zA-Z] kitty_ipsum_1

### 530.1

grep can use regular expressions, too.

grep --color -n meow[a-zA-Z]* kitty_ipsum_1.txt

#### HINTS

- Hint

## 540. grep --color -n cat[^ ] kitty_ipsum_1

### 540.1

grep --color -n cat[^ ] kitty_ipsum_1.txt

#### HINTS

- Hint
