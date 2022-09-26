import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FolderOutline.svg';

export function FolderOutline(props: TProps) {
  return (
    <Icon {...props} name="FolderOutline">
      <SVG />
    </Icon>
  );
}
