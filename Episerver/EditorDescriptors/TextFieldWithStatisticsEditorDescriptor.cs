using EpiMoreEditors.Episerver.Constants;
using EPiServer.Shell.ObjectEditing.EditorDescriptors;

namespace EpiMoreEditors.Episerver.EditorDescriptors
{
    [EditorDescriptorRegistration(TargetType = typeof(string), UIHint = MoreUIHints.TextFieldWithStatistics)]
    public class TextFieldWithStatisticsEditorDescriptor : EditorDescriptor
    {
        public TextFieldWithStatisticsEditorDescriptor()
        {
            ClientEditingClass = "epi-more-editors/TextFieldWithStatistics";
        }
    }
}
