import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const generateRandomStat = () => Math.floor(Math.random() * 16) + 3;

const generateCharacter = () => ({
  strength: generateRandomStat(),
  dexterity: generateRandomStat(),
  constitution: generateRandomStat(),
  intelligence: generateRandomStat(),
  wisdom: generateRandomStat(),
  charisma: generateRandomStat(),
});

const rollDice = (sides) => Math.floor(Math.random() * sides) + 1;

const Index = () => {
  const [character, setCharacter] = useState(null);
  const [diceRoll, setDiceRoll] = useState(null);

  const handleGenerateCharacter = () => {
    setCharacter(generateCharacter());
  };

  const handleRollDice = (sides) => {
    setDiceRoll(rollDice(sides));
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center space-y-4">
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="text-center">Dungeons & Dragons Character Generator</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <Button onClick={handleGenerateCharacter}>Generate Character</Button>
          {character && (
            <div className="w-full">
              <Separator className="my-4" />
              <div className="space-y-2">
                <div>Strength: {character.strength}</div>
                <div>Dexterity: {character.dexterity}</div>
                <div>Constitution: {character.constitution}</div>
                <div>Intelligence: {character.intelligence}</div>
                <div>Wisdom: {character.wisdom}</div>
                <div>Charisma: {character.charisma}</div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
      <Card className="w-96">
        <CardHeader>
          <CardTitle className="text-center">Dice Roller</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center space-y-4">
          <Button onClick={() => handleRollDice(20)}>Roll D20</Button>
          {diceRoll !== null && (
            <div className="mt-4">
              <Separator className="my-4" />
              <div>Dice Roll Result: {diceRoll}</div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Index;