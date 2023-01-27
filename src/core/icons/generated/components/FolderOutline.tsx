import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/FolderOutline.svg';

export function FolderOutline(props: TBaseProps) {
  return (
    <Icon {...props} name="FolderOutline">
      <SVG />
    </Icon>
  );
}
