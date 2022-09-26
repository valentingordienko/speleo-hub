import React from 'react';

import { Icon, TProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/DeleteDocsOutline.svg';

export function DeleteDocsOutline(props: TProps) {
  return (
    <Icon {...props} name="DeleteDocsOutline">
      <SVG />
    </Icon>
  );
}
