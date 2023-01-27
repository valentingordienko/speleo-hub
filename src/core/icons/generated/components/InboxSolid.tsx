import React from 'react';

import { Icon, TBaseProps } from '../../Icon';
import { ReactComponent as SVG } from '../svg/InboxSolid.svg';

export function InboxSolid(props: TBaseProps) {
  return (
    <Icon {...props} name="InboxSolid">
      <SVG />
    </Icon>
  );
}
