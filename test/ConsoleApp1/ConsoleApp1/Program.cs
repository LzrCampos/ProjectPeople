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