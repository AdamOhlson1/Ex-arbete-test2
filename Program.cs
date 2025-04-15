var builder = WebApplication.CreateBuilder(args);

// Lägg till CORS här:
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy.WithOrigins("http://localhost:3000") // Next.js
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

// Lägg till controllers etc.
builder.Services.AddControllers();

var app = builder.Build();

// Aktivera CORS middleware
app.UseCors();

app.UseAuthorization();

app.MapControllers();

app.Run();
