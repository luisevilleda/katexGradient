# -*- coding: utf-8 -*-

from __future__ import print_function
import sys


gamma = False
gamma_const = 2.2 if gamma else 1
color1 = "E83535"
color2 = "35D3E8"
new_string = """What the fuck did you just fucking say about me, you little bitch? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target."""
new_string = """What the fuck did you just fucking say about us, you little shit? I’ll have you know I graduated top of my bootcamp class, and I’ve been getting redefines expectations and DE's every performance review, and I have over 300 confirmed SEV-1 fixes. I was trained in SRO and I’m the top interviewer in the entire Facebook Engineering Org. You are nothing to me but just another FBID. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, mark my fucking words. You think you can get away with saying that shit to me on Facebook? Think again, fucker."""
# new_string = """As we speak I am contacting my secret network of Production Engineers across Infrastructure and your FBID is being checkpointed right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, and I can TROLL you in over seven hundred ways, and that’s just with crushinator. Not only am I extensively trained in Rust and C++, but I have access to the entire arsenal of FBCODE and I will use it to its full extent to wipe your miserable ass off the face of the Internet, you little shit."""
# new_string = """Welcome to Flask’s documentation. This documentation is divided into different parts. I recommend that you get started with Installation and then head over to the Quickstart. Besides the quickstart, there is also a more detailed Tutorial that shows how to create a complete (albeit small) application with Flask. If you’d rather dive into the internals of Flask, check out the API documentation. Common patterns are described in the Patterns for Flask section."""
# new_string = "you tried"
string = []

line_break = 25
for i in range((len(new_string)/line_break) + 1):
    string.append(new_string[(i*line_break):(i+1)*line_break])

# string = "testing one two three four five"
# string = "you can do neat stuff with LaTeX"
# string = "hello world"
# string = "BFF"
if len(sys.argv) == 1:
    print('Please specify some text')
    sys.exit(1)

# string = sys.argv[1]
inline = False
multiline = True


def piece(color):
    return (color[:2], color[2:4], color[4:6],)

def step_piece(piece1, piece2, count):
    color_pieces = []
    int1 = int(piece1, 16) ** (gamma_const)
    int2 = int(piece2, 16) ** (gamma_const)
    upper = max(int1, int2)
    lower = min(int1, int2)
    diff = (upper-lower) / float(count)
    print(piece1, piece2, count)
    print(int1, int2, diff)
    for i in range(it):
        if int1 > int2:
            num = (int1 - (i * diff)) ** (1/gamma_const)
        else:
            num = (int1 + (i * diff)) ** (1/gamma_const)

        color_pieces.append("{:02x}".format(int(num)))
    print(color_pieces)
    return color_pieces


it = len(string)

color1_pieces = piece(color1)
color2_pieces = piece(color2)


p1 = step_piece(color1_pieces[0], color2_pieces[0], it)
p2 = step_piece(color1_pieces[1], color2_pieces[1], it)
p3 = step_piece(color1_pieces[2], color2_pieces[2], it)

colors = zip(p1, p2, p3)
if inline:
    print('\\(', end='')
else:
    print('$$', end='')

if multiline:
    print('\\begin{matrix}', end='')
else:
    print('\\textsf{{', end='')


for i in range(len(string)):
    # print(string[i])
    # continue
    color = ''.join(colors[i])
    if multiline:
        print(' \\\\ \\textsf{', end='')
    if string[i] == " ":
        print(' ', end='')
    else:
        print('\\color{{#{color}}}{c}'.format(color=color, c=string[i]), end='')

    if multiline:
        print('}', end='')

if not multiline:
    print("}}", end='')

if multiline:
    print('\\end{matrix}', end='')
if inline:
    print('\\)')
else:
    print('$$')
