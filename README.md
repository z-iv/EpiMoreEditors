# Custom editors for Episerver

## Usage
Decorate properties with MoreUIHints hints:
```csharp
[UIHint(MoreUIHints.TextAreaWithStatistics)]
public virtual string TextAreaWithStatistics { get; set; }
```