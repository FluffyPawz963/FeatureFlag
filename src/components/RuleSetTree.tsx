import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { renderTreeData } from '@/constants/AppConstant';

interface ruleSetTreeProps {
  selectionCallback: any
}

export default function RuleSetTree(props: ruleSetTreeProps) {
  return (
    <div>
      <TreeView
        aria-label="rich object"
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpanded={['root']}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {renderTree(renderTreeData, props.selectionCallback)}
      </TreeView>
    </div>
  );
}

const renderTree = (nodes: RenderTree, callback: any) => (
  <TreeItem key={nodes.id} nodeId={nodes.id} label={nodes.name} 
  className={nodes.feature === true ? 'allblack' : 'allgrey'} onClick={() => callback(nodes)}>
    {Array.isArray(nodes.children)
      ? nodes.children.map((node) => renderTree(node, callback))
      : null}
  </TreeItem>
);