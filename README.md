# ProjectPeople
Projeto para um front-end que exibira os resultados de uma API mockada


## 1

Encapsulamento é o poder de ocultar ou restringir acesso aos atributos de uma classe atraves dos
modificadores de acesso como public, private, protected e internal.
Exemplo: 
``` c#
public class pessoa{
    public string name { get; private set; }
    public void Pessoa(string name){
        this.name = name;
    }
}
```

## 2
Conceito de Open/Close referente ao "O" do S.O.L.I.D diz que o objeto  ou entidade deve estar aberto pra 
extenção e fechado para modificação.
``` c#
public class Program
{
    public static void Main()
    {
        var mage = new Mage("Patolino");
        var warrrior = new Warrior("Pertalonga");

        mage.Atack();
        warrrior.Atack();
    }
}

public abstract class Skill
{
    public string name { get; set; }
    public abstract void Atack();

    public void FormatDamage(int damage, string name)
    {
        Console.WriteLine($"O ataque de {name} causou {damage} pontos de dano."); 
    }
}

public class Mage : Skill
{
    public int Magika { get; private set; }
    public Mage(string name)
    {
        this.name = name;
        this.Magika = 10;
    }

    public override void Atack()
    {
        if (this.Magika == 0)
        {
            Console.WriteLine("Voce não possui mana o suficiente.");
        }
        else
        {
            this.Magika--;
            int damage = new Random().Next(1, 13);
            FormatDamage(damage, this.name);
        }
    }
}

public class Warrior : Skill
{
    public Warrior(string name)
    {
        this.name = name;
    }

    public override void Atack()
    {
        int damage = new Random().Next(1, 7);
        FormatDamage(damage, this.name);
    }
}
```

## 3

Latido
Miau

O metodo virtual da classe herdada não é executado mas sim o metodo implementado pela classe filha.

## 4
Entre os modificadores de acesso no type script existem o public, private e protected e eles se diferenciam
 por conceder niveis de acessibilidade diferentes aos atributos de uma classe por exemplo:

### Public 
    Permite que os atributos da classe possa ser acessados por ela mesma e por suas classes filhas e outras classes

### Private 
    PErmite que os atributos de uma classe só possa ser acessados pela mesma.

### Protected
    Permite que os atributos da classe possa ser acessada somente por ela mesma e por seus filhos.


## 5

Os Pipe`s servem para formatar dados no angular.

``` ts
 import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpf',
  standalone: true
})
export class CpfPipe implements PipeTransform {

  transform(value: string): string {

    let valueTranform = value.replace(/\D/g, '')
    let mascara = /^(\d{3})(\d{3})(\d{3})(\d{2})$/

    let result = valueTranform.replace(mascara, '$1.$2.$3-$4');

    return result;
  }
}
```

## 6

``` sql
    SELECT 
        Cpf,
        Nome,
        Genero,
        Endereco,
        Idade,
        Municipio,
        Estado
    FROM 
        Pessoas AS p
    WHERE
        p.Estado = "SP" AND p.Idade BETWEEN 25 AND 40
    ORDER BY p.Nome
```