using EmailStoreApi.Models;
using EmailStoreApi.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options => 
    //options.AddPolicy(name: "AllowAnyOrigin", builder => builder.AllowAnyOrigin())
    options.AddDefaultPolicy(builder => builder.AllowAnyOrigin())
    );



// Add services to the container.
builder.Services.Configure<EmailStoreDatabaseSettings>(
    builder.Configuration.GetSection("BookStoreDatabase"));

builder.Services.AddSingleton<EmailService>();

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();
app.UseCors();
// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
