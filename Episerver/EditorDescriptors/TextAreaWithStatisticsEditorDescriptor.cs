using EpiMoreEditors.Episerver.Constants;
using EPiServer.Shell.ObjectEditing.EditorDescriptors;

namespace EpiMoreEditors.Episerver.EditorDescriptors
{
    [EditorDescriptorRegistration(TargetType = typeof(string), UIHint = MoreUIHints.TextAreaWithStatistics)]
    public class TextAreaWithStatisticsEditorDescriptor : EditorDescriptor
    {
        public TextAreaWithStatisticsEditorDescriptor()
        {
            ClientEditingClass = "epi-more-editors/TextAreaWithStatistics";
        }
    }
}
