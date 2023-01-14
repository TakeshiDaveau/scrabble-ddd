# Scrabble-ddd

Kata for DDD, BDD and HATEOAS

## Rules

https://scrabble.hasbro.com/en-us/rules

### Letters distribution

https://en.wikipedia.org/wiki/Scrabble_letter_distributions

## Design

### Module types definition

Letter and word

- type Letter = a | b | c | d | e | f | g | h | i | j | k | l | m | n | o | p | q | r | s | t | u | v | w | x | y | z | Joker
- type Letter Bag = Letter list
- type Word = Letter list

Board and squares

- type PositionX = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13
- type PositionY = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13
- type SquareBonus = None | Word double | Word Triple | Letter Double | Letter Triple
- type Square = PositionX * PositionY * SquareBonus

- type IsScrabble = Yes | No
- type WordOnBoard = Letter * Square * IsScrabble

- type Board = Square list
- type GameBoard = { Board: Board, Words: WordOnBoard list }

Player and Hand

- type Hand = Letter list
- type Player = {Name: string, Score: number, Hand: Hand, Order: Number }

Whole Game

- type Game = { Board: GameBoard, Players: Player list, CurrentPlayer: Player, Bag: Letter Bag }

Actions

- type DrawLetters = (Letter Bag * Hand) -> (Letter Bag * Hand)

- type ValidateWordExistence = Word -> Boolean
- type AddWordOnBoard = (Word * GameBoard * Hand) -> (WordOnBoard * GameBoard * Hand)
- type UpdatePlayerScore = WordOnBoard -> Player

- type ChangeHand = (Letter Bag * Hand) -> (Letter Bag * Hand)

- type DefinePlayersOrder = Game -> Game
- type NextPlayer = Game -> Game

### Word validation

At this time we'll only provide french scrabble. To valide the word we'll use https://1mot.net/.

Test if the `<h1>` ends with "n'est pas valide au scrabble" (KO) or "est valide au scrabble" (OK).

In case of HTTP error the word is considered as invalid.

## Roadmap

- [ ] Add the domain layer with Behaviour Driven Development 
- [ ] Add the infrastructure layer with a service to validate the word
- [ ] Add contract testing on external service
- [ ] Add OpenAPI description
- [ ] Add a tool to update type with the OpenAPI description
- [ ] Add controller without HATEOAS link
- [ ] Add links with a reverse router based on the OpenAPI description
- [ ] Add in and out API validation