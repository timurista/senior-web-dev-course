## Bag of Words Model

A simple model of an email.

Create a model to give us a yes / no response.

## Vector start
we start off with a vector of many zeros

20,000 vector is the size because it models the 20-35k does the number of words in english language a person knows.

3000 words provides coverage for 95% of common texts

then we have [0,1,..., n]
0 start of sentence
1 end of sentence
n the other words we don't know if we encoutner them

we increase quanitity of words for word in vector.

## Training set
so then we apply the function to parse x number of sentences with a yes no response, then we apply the model from our toolbox.

Using the training data one model we can use to apply is logistic regression. Then, once we have that we can feed our actual email into it and come up with possible solution.

# Nueral network
feed it into hidden layers, from input to hidden layer 1, hidden layer 2, to output layer.

Limitation is yes / no. Very simple.

## Sseq2seq
We have x number of words we feed into the system. Once they process we start getting output. How does it know it has to have only 3 outputs.

Predictions there are 20k options, or results network can use.

It will pick the one with the highest probability.
Yes, I'm and back.

Encoder and then decoder
first part encodes meaning
second part that decodes meaning

## Training vs Applying
Want our nueral network and get this end result back. One sentence from a different email.

We want to get intuition behind things. What does it mean network through backpropogation. Probability so that Yes can be highest probability of being picked.

Model logic and behavior.
  - weights 10-11 words
  - but 5 words as output

this is very specific output,
but the network will response only 12 word response.

This training seems very specific.
But weights are same in network. 
Those are foundation for this model.

## Standard back propogation

