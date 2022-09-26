import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FolderSolid.svg';

export function FolderSolid(props: TProps) {
  return (
    <Icon {...props} name="FolderSolid">
      <SVG />
    </Icon>
  );
}
