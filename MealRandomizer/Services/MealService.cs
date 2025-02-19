using MealRandomizer.Domain;
using System.Text.Json;

namespace MealRandomizer.Services;

public class MealService
{
    private const string FilePath = "wwwroot/meals.json";
    private List<Meal> meals = new();

    public MealService()
    {
        LoadMeals();
    }

    private void LoadMeals()
    {
        if (File.Exists(FilePath))
        {
            string json = File.ReadAllText(FilePath);
            meals = JsonSerializer.Deserialize<List<Meal>>(json) ?? new();
        }
    }

    private void SaveMeals()
    {
        string json = JsonSerializer.Serialize(meals, new JsonSerializerOptions { WriteIndented = true });
        File.WriteAllText(FilePath, json);
    }

    public List<Meal> GetMeals() => meals;
    public void AddMeal(Meal meal)
    {
        meals.Add(meal);
        SaveMeals();
    }
    public Meal GetRandomMeal()
    {
        return meals.Count > 0 ? meals[new Random().Next(meals.Count)] : new Meal { Name = "Brak posiłków" };
    }
}