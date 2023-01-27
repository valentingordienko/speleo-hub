import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FolderSolid.svg';

export function FolderSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="FolderSolid">
      <SVG />
    </Icon>
  );
}
